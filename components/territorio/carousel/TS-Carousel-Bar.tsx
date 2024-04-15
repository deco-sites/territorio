import { clx } from '../../../sdk/clx.ts';
import {
  ComplementaryColors,
  ThemeColors,
} from '../../../sections/Theme/Theme.tsx';

export interface Props {
  items: unknown[];
  currentId: number;
  onItemClick: (index: number) => void;
  activeColor?:
    | keyof ThemeColors
    | keyof ComplementaryColors
    | 'accent'
    | 'accent-content';
}

const TsCarouselBar = ({
  items,
  currentId,
  onItemClick,
  activeColor = 'accent-content',
}: Props) => {
  return (
    <div class='flex gap-x-3'>
      {items?.map((_, index) => {
        const isSelected = index === currentId;

        return (
          <button
            id={String(index)}
            onClick={(event) => {
              const target = event.target as HTMLButtonElement;
              onItemClick(Number(target.id));
            }}
            class={clx(
              'h-1 w-6',
              isSelected ? `bg-${activeColor}` : 'bg-base-100'
            )}
          ></button>
        );
      })}
    </div>
  );
};

export default TsCarouselBar;
