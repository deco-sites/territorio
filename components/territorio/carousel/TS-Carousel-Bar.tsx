import {
  Color,
  getColorFromVar,
} from "deco-sites/territorio/sdk/territorio/getColorFromVar.ts";
import { clx } from "../../../sdk/clx.ts";

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

        return (
          <button
            id={String(index)}
            onClick={(event) => {
              const target = event.target as HTMLButtonElement;
              onItemClick(Number(target.id));
            }}
            class={clx("h-1 w-6", !isSelected && "bg-base-100")}
            style={isSelected
              ? {
                backgroundColor: activeColor.startsWith("#")
                  ? activeColor
                  : getColorFromVar(activeColor as Color),
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
