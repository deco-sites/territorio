import { useSignal } from '@preact/signals';
import Image from 'apps/website/components/Image.tsx';
import Icon from 'deco-sites/territorio/components/ui/Icon.tsx';
import { StateUpdater, useRef } from 'preact/hooks';
import TsCarouselIsland from '../../../islands/territorio/TS-Carousel.tsx';
import type { Expert } from './types.ts';

export interface TsExpertCarouselProps {
  experts: Expert[];
  updateExpertId: StateUpdater<number>;
}

const FIRST_EXPERT_SHOWN_INDEX = 0;
const MAX_EXPERTS_SHOWN = 3;
const XL_ITEMS_WIDTH = 200;

const ArrowButton = ({
  icon,
  onClick,
}: {
  onClick?: () => void;
  icon: 'ChevronLeft' | 'ChevronRight';
}) => (
  <button onClick={onClick}>
    <Icon
      class='text-base-300 w-[8px] h-[28px] sm:w-[30px] sm:h-[100px]'
      id={icon}
      strokeWidth={5}
    />
  </button>
);

const TsExpertCarousel = ({
  experts,
  updateExpertId,
}: TsExpertCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndex = useSignal(FIRST_EXPERT_SHOWN_INDEX);

  const onNext = () => {
    currentIndex.value++;
    carouselRef.current?.scrollTo({
      left: XL_ITEMS_WIDTH * currentIndex.value,
      behavior: 'smooth',
    });
    currentIndex.value = Math.min(
      currentIndex.value,
      experts.length - MAX_EXPERTS_SHOWN
    );
  };

  const onPrevious = () => {
    currentIndex.value--;
    carouselRef.current?.scrollTo({
      left: XL_ITEMS_WIDTH * currentIndex.value,
      behavior: 'smooth',
    });
    currentIndex.value = Math.max(currentIndex.value, FIRST_EXPERT_SHOWN_INDEX);
  };

  return (
    <div class='flex items-center gap-x-5 sm:gap-x-20'>
      <ArrowButton onClick={onPrevious} icon='ChevronLeft' />
      <TsCarouselIsland
        ref={carouselRef}
        showBar={false}
        class='overflow-x-auto snap-x snap-mandatory scrollbar-hide'
      >
        <>
          <ul class='flex gap-x-4 sm:gap-x-12 sm:max-w-[554px]'>
            {experts.map((expert, index) => (
              <li
                key={expert.fullName}
                class='list-none border-[0.5px] border-base-300 hover:brightness-150'
              >
                <button onClick={() => updateExpertId(index)}>
                  <Image
                    src={expert.thumbnail.src}
                    alt={expert.thumbnail.alt}
                    width={150}
                    height={150}
                    class='inline-block sm:max-w-[150px]'
                  />
                </button>
              </li>
            ))}
          </ul>
        </>
      </TsCarouselIsland>
      <ArrowButton onClick={onNext} icon='ChevronRight' />
    </div>
  );
};

export default TsExpertCarousel;
