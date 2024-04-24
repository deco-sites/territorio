import { clx } from "../../../sdk/clx.ts";
import {
  ComplementaryColors,
  ThemeColors,
} from "../../../sections/Theme/Theme.tsx";

type Color =
  | keyof ThemeColors
  | keyof ComplementaryColors
  | "accent"
  | "accent-content";

export interface Props {
  items: unknown[];
  currentId: number;
  onItemClick: (index: number) => void;
  activeColor?: `${Color}` | `#${string}`;
}

const TsCarouselBar = ({
  items,
  currentId,
  onItemClick,
  activeColor = "accent-content",
}: Props) => {
  return (
    <div class="flex gap-x-3">
      {items?.map((_, index) => {
        const isSelected = index === currentId;
        const hasCustomColor = activeColor.startsWith("#");

        return (
          <button
            id={String(index)}
            onClick={(event) => {
              const target = event.target as HTMLButtonElement;
              onItemClick(Number(target.id));
            }}
            class={clx(
              "h-1 w-6",
              !isSelected && "bg-base-100",
              isSelected && !hasCustomColor && `bg-${activeColor}`,
            )}
            style={isSelected && hasCustomColor
              ? {
                backgroundColor: activeColor,
              }
              : {}}
          >
          </button>
        );
      })}
    </div>
  );
};

export default TsCarouselBar;
