import Image from 'apps/website/components/Image.tsx';
import { AppContext } from '../../../apps/site.ts';
import Carousel from '../../../islands/territorio/TS-Territorios-Carousel.tsx';
import TsTypography from '../typography/TS-Typography.tsx';
import { BasicImage, TerritoriosCarouselItem } from './types.ts';

export interface Props {
  image: BasicImage;
  titlePrimary: string;
  titleSecondary: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
  carouselItems: TerritoriosCarouselItem[];
}

function TsTerritorios({
  image,
  titlePrimary,
  titleSecondary,
  descriptionPrimary,
  descriptionSecondary,
  carouselItems,
}: Props) {
  return (
    <div id='territorios' class='flex justify-center my-5 bg-base-200'>
      {/* Mobile */}
      <div class='md:hidden flex flex-col justify-center gap-y-6 px-[44px]'>
        <div class='flex items-end'>
          <TsTypography
            color='accent-content'
            class='text-3xl sm:text-5xl min-w-[155px] max-w-[155px] mb-[-8px]'
          >
            {titlePrimary}{' '}
            <TsTypography color='base-100'>{titleSecondary}</TsTypography>
          </TsTypography>
          <Image
            src={image.src}
            alt={image.alt}
            width='70%'
            height={218}
            class='ml-[-40px] sm:ml-[0]'
          />
        </div>
        <TsTypography type='body' color='base-100' class='text-sm sm:text-lg'>
          {descriptionPrimary}{' '}
          <TsTypography weight='600'>{descriptionSecondary}</TsTypography>
        </TsTypography>
        <Carousel items={carouselItems} />
      </div>
      {/* Desktop */}
      <div class='hidden md:flex flex-col max-w-[1200px] w-full justify-center md:pt-6 xl:pt-10 px-8 xl:px-0'>
        <div class='flex justify-between'>
          <div class='flex flex-col mt-[80px]'>
            <TsTypography
              color='accent-content'
              class='text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-[70px]'
            >
              {titlePrimary}{' '}
              <TsTypography color='base-100'>{titleSecondary}</TsTypography>
            </TsTypography>
            <TsTypography
              type='body'
              color='base-100'
              class='lg:text-xl xl:text-2xl max-w-[460px]'
            >
              {descriptionPrimary}{' '}
              <TsTypography weight='600'>{descriptionSecondary}</TsTypography>
            </TsTypography>
          </div>
          <Image src={image.src} alt={image.alt} width={688} height={825} />
        </div>
        <div class='flex justify-between w-full mt-16'>
          {carouselItems.map((item) => (
            <div key={item.title} class='sm:max-w-[220px] lg:max-w-[300px]'>
              <div class='flex justify-between items-center mb-3 sm:gap-x-3 lg:gap-x-7'>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={'70%'}
                  height={825}
                />
                <TsTypography
                  weight='300'
                  color='accent-content'
                  class='sm:text-2xl lg:text-[34px] max-w-[160px]'
                >
                  Território{' '}
                  <TsTypography weight='600'>{item.title}</TsTypography>
                </TsTypography>
              </div>
              <TsTypography
                type='body'
                color='base-100'
                class='md:text-sm lg:text-[16px]'
              >
                {item.description}
              </TsTypography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsTerritorios;
