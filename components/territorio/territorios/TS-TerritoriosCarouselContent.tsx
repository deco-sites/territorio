import Image from 'apps/website/components/Image.tsx';
import TsTypography from '../typography/TS-Typography.tsx';
import { TerritoriosCarouselItem } from './types.ts';

export interface Props {
  items: TerritoriosCarouselItem[];
}

const TsTerritoriosCarouselContent = ({ items }: Props) => {
  return (
    <>
      {Object.entries(items).map(([_, item]) => (
        <div class='text-center min-w-full flex flex-col gap-1'>
          <div class='flex flex-col items-center gap-y-5'>
            <div
              key={item.title}
              class='max-w-[280px] sm:max-w-[300px] min-h-[240px] px-6'
            >
              <div class='flex justify-between items-center mb-5'>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={82}
                  height={41}
                />
                <TsTypography
                  weight='300'
                  color='accent-content'
                  class='text-2xl sm:text-3xl'
                >
                  Território{' '}
                  <TsTypography weight='600'>{item.title}</TsTypography>
                </TsTypography>
              </div>
              <div class='text-left'>
                <TsTypography
                  type='body'
                  color='base-100'
                  class='text-sm sm:text-lg'
                >
                  {item.description}
                </TsTypography>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TsTerritoriosCarouselContent;
