import { useSignal, useSignalEffect } from '@preact/signals';
import type { ImageWidget } from 'apps/admin/widgets.ts';
import { clx } from 'deco-sites/territorio/sdk/clx.ts';
import { AppContext } from '../../../apps/site.ts';
import { useTsCarrousel } from '../../../hooks/useTsCarrousel.tsx';
import TsTypography from '../../territorio/typography/TS-Typography.tsx';

/**
 * @title Basic image
 */
interface BaseImage {
  src: ImageWidget;
  alt: string;
}

export interface HeroProps {
  images: BaseImage[];
  text: string;
}

const TsHero = ({ images, text }: HeroProps) => {
  const changedPosition = useSignal(0);
  const shouldShow = useSignal(true);

  const { visibleItems, onNext } = useTsCarrousel<BaseImage>({
    items: images,
    visibleItemsCountParam: 1,
    shouldCycle: true,
    autoChangeDelay: 5000,
    onChangeCallback: () => {
      changedPosition.value = 1;
    },
  });

  useSignalEffect(() => {
    if (changedPosition.value !== 0) {
      shouldShow.value = false;
      setTimeout(() => {
        changedPosition.value = 0;
        setTimeout(() => {
          shouldShow.value = true;
        }, 100);
      }, 100);
    }
  });
  const visibleImage = visibleItems[0];

  return (
    <div
      onClick={onNext}
      style={{
        backgroundImage: `url("${visibleImage.src}")`,
      }}
      class={clx(
        'flex justify-center bg-cover bg-no-repeat bg-right xl:bg-left-top items-center h-screen px-8',
        'transition-all ease-in-out duration-200 transform opacity-0',
        changedPosition.value === -1 && 'translate-x-10',
        changedPosition.value === 1 && '-translate-x-10',
        changedPosition.value === 0 && 'translate-x-0',
        shouldShow.value && 'opacity-100'
      )}
    >
      <div class='flex items-center w-full max-w-[1200px]'>
        <TsTypography
          weight='400'
          color='base-100'
          class='text-4xl max-w-[270px] sm:text-6xl md:text-7xl xl:text-8xl sm:max-w-[500px] xl:max-w-[700px] select-none'
        >
          {text}
        </TsTypography>
      </div>
      <div class='w-full h-[118px] sm:h-[198px] xl:h-[278px] absolute bottom-0 bg-gradient-to-t from-base-200 via-base-200 to-transparent' />
    </div>
  );
};

export const loader = (props: HeroProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsHero;
