import Image from "apps/website/components/Image.tsx";
import Icon from "deco-sites/territorio/components/ui/Icon.tsx";
import { StateUpdater } from "preact/hooks";
import { useTsCarrousel } from "../../../hooks/useTsCarrousel.tsx";
import type { Expert } from "./types.ts";

export interface TsExpertCarouselProps {
  experts: Expert[];
  updateExpert: StateUpdater<Expert>;
}

const ArrowButton = ({
  disabled,
  onClick,
  icon,
}: {
  onClick: () => void;
  disabled: boolean;
  icon: "ChevronLeft" | "ChevronRight";
}) => (
  <button onClick={onClick} disabled={disabled}>
    <Icon
      class="text-base-300 w-[8px] h-[28px] sm:w-[30px] sm:h-[100px]"
      id={icon}
      strokeWidth={5}
    />
  </button>
);

const TsExpertCarousel = ({ experts, updateExpert }: TsExpertCarouselProps) => {
  const { visibleItems, onPrevious, onNext, hasPrevious } = useTsCarrousel<
    Expert
  >({
    items: experts,
    visibleItemsCountParam: 3,
  });

  const lastExpert = experts[experts.length - 1];
  const expertOnTheRight = visibleItems[2];

  return (
    <div class="flex justify-between items-center gap-x-5 sm:gap-x-20">
      <ArrowButton
        onClick={onPrevious}
        icon="ChevronLeft"
        disabled={!hasPrevious}
      />
      <ul class="flex justify-center gap-x-4 sm:gap-x-12">
        {visibleItems.map((expert) => (
          <li
            key={expert.fullName}
            class="border-[0.5px] border-base-300 hover:brightness-150"
          >
            <button onClick={() => updateExpert(expert)}>
              <Image
                src={expert.thumbnail.src}
                alt={expert.thumbnail.alt}
                width={100}
                class="inline-block"
              />
            </button>
          </li>
        ))}
      </ul>
      <ArrowButton
        onClick={onNext}
        icon="ChevronRight"
        disabled={lastExpert.fullName === expertOnTheRight.fullName}
      />
    </div>
  );
};

export default TsExpertCarousel;
