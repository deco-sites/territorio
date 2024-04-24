import type { ImageWidget } from "apps/admin/widgets.ts";
import { AppContext } from "../../../apps/site.ts";
import { useTsCarrousel } from "../../../hooks/useTsCarrousel.tsx";
import TsTypography from "../../territorio/typography/TS-Typography.tsx";

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
  const { visibleItems, onNext } = useTsCarrousel<BaseImage>({
    items: images,
    visibleItemsCountParam: 1,
    shouldCycle: true,
    autoChangeDelay: 5000,
  });

  const visibleImage = visibleItems[0];

  return (
    <div
      class="flex justify-center bg-cover bg-no-repeat bg-right xl:bg-left-top items-center h-screen px-8"
      style={{
        backgroundImage: `url("${visibleImage.src}")`,
      }}
    >
      <div class="flex items-center w-full max-w-[1200px]">
        <TsTypography
          weight="400"
          color="base-100"
          class="text-4xl max-w-[200px] sm:text-8xl sm:max-w-[800px] xl:text-9xl xl:max-w-[950px] select-none"
        >
          {text}
        </TsTypography>
      </div>
      <div class="w-full h-[118px] sm:h-[198px] xl:h-[278px] absolute bottom-0 bg-gradient-to-t from-base-200 via-base-200 to-transparent" />
    </div>
  );
};

export const loader = (props: HeroProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsHero;
