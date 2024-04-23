import { useSignal } from '@preact/signals';
import Image from 'apps/website/components/Image.tsx';
import Icon from 'deco-sites/territorio/components/ui/Icon.tsx';
import useTsMediaQuery, {
  MediaQueryKey,
} from 'deco-sites/territorio/hooks/useTsMediaQuery.tsx';
import { StateUpdater, useRef } from 'preact/hooks';
import TsCarouselIsland from '../../../islands/territorio/TS-Carousel.tsx';
import type { Expert } from './types.ts';

export interface TsExpertCarouselProps {
  experts: Expert[];
  updateExpertId: StateUpdater<number>;
}

const FIRST_EXPERT_SHOWN_INDEX = 0;
const MAX_EXPERTS_SHOWN = 3;

const ITEMS_WIDTH: Record<MediaQueryKey, number> = {
  xs: 84,
  sm: 118,
  md: 118,
  lg: 142,
  xl: 142,
  '2xl': 200,
};

const ArrowButton = ({
  icon,
  onClick,
}: {
  onClick?: () => void;
  icon: 'ChevronLeft' | 'ChevronRight';
}) => (
  <button onClick={onClick}>
    <Icon
      class='text-base-300 w-[8px] sm:w-[20px] lg:w-[25px] 2xl:w-[30px] h-[28px] sm:h-[60px] lg:h-[80px] 2xl:h-[100px]'
      id={icon}
      strokeWidth={5}
    />
  </button>
);

const TsExpertCarousel = ({
  experts,
  updateExpertId,
}: TsExpertCarouselProps) => {
  const { currentMediaQuery } = useTsMediaQuery();
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndex = useSignal(FIRST_EXPERT_SHOWN_INDEX);

  const onNext = () => {
    currentIndex.value++;
    carouselRef.current?.scrollTo({
      left: ITEMS_WIDTH[currentMediaQuery] * currentIndex.value,
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
      left: ITEMS_WIDTH[currentMediaQuery] * currentIndex.value,
      behavior: 'smooth',
    });
    currentIndex.value = Math.max(currentIndex.value, FIRST_EXPERT_SHOWN_INDEX);
  };

  return (
    <div class='flex items-center gap-x-4 sm:gap-x-12 lg:gap-x-16 2xl:gap-x-20'>
      <ArrowButton onClick={onPrevious} icon='ChevronLeft' />
      <TsCarouselIsland
        ref={carouselRef}
        showBar={false}
        class='overflow-x-auto snap-x snap-mandatory scrollbar-hide'
      >
        <>
          <ul class='flex gap-x-4 sm:gap-x-8 lg:gap-x-10 2xl:gap-x-12 max-w-[240px] sm:max-w-[326px] lg:max-w-[390px] 2xl:max-w-[554px]'>
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
                    class='inline-block max-w-[66px] sm:max-w-[84px] lg:max-w-[100px] 2xl:max-w-[150px]'
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
