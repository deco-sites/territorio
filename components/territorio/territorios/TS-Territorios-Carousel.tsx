import Image from 'apps/website/components/Image.tsx';
import { useTsCarrousel } from '../../../hooks/useTsCarrousel.tsx';
import TsCarouselBar from '../carousel/TS-Carousel-Bar.tsx';
import TsTypography from '../typography/TS-Typography.tsx';
import { TerritoriosCarouselItem } from './types.ts';

export interface Props {
  items: TerritoriosCarouselItem[];
}

const TsTerritoriosCarousel = ({ items }: Props) => {
  const { visibleItems, currentIndex, setCurrentIndex } =
    useTsCarrousel<TerritoriosCarouselItem>({
      items,
      visibleItemsCountParam: 1,
      shouldCycle: true,
      autoChangeDelay: 5000,
    });

  const visibleItem = visibleItems[0];

  return (
    <div class='flex flex-col justify-center items-center gap-y-5 px-6'>
      <div
        key={visibleItem.title}
        class='max-w-[280px] sm:max-w-[300px] min-h-[240px]'
      >
        <div class='flex justify-between items-center gap-x-5 mb-5'>
          <Image
            src={visibleItem.image.src}
            alt={visibleItem.image.alt}
            width='40%'
            height={41}
          />
          <TsTypography
            weight='300'
            color='accent-content'
            class='text-2xl sm:text-3xl max-w-[160px]'
          >
            Território{' '}
            <TsTypography weight='600'>{visibleItem.title}</TsTypography>
          </TsTypography>
        </div>
        <TsTypography type='body' color='base-100' class='text-sm sm:text-lg'>
          {visibleItem.description}
        </TsTypography>
      </div>
      <TsCarouselBar
        items={items}
        currentId={currentIndex}
        onItemClick={setCurrentIndex}
      />
    </div>
  );
};

export default TsTerritoriosCarousel;
