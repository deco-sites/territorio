import { useSignal, useSignalEffect } from "@preact/signals";
import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";
import useTsMediaQuery from "deco-sites/territorio/hooks/useTsMediaQuery.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { AppContext } from "../../../apps/site.ts";
import { useTsCarrousel } from "../../../hooks/useTsCarrousel.tsx";
import TsTypography from "../../territorio/typography/TS-Typography.tsx";

export interface HeroProps {
  largeImages: BasicImage[];
  smallImages: BasicImage[];
  mobileImages: BasicImage[];
  text: string;
}

const TsHero = ({
  mobileImages,
  smallImages,
  largeImages,
  text,
}: HeroProps) => {
  const changedPosition = useSignal(0);
  const shouldShow = useSignal(true);

  const { currentMediaQuery } = useTsMediaQuery();
  let backgroundImages: BasicImage[];
  switch (currentMediaQuery) {
    case "sm":
      backgroundImages = smallImages;
      break;
    case "xs":
      backgroundImages = mobileImages;
      break;
    default:
      backgroundImages = largeImages;
  }

  const { visibleItems, onNext } = useTsCarrousel<BasicImage>({
    items: backgroundImages,
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
        "flex justify-center ts-responsive bg-cover bg-no-repeat sm:bg-right-top items-center h-screen px-20",
        "transition-all ease-in-out duration-200 transform opacity-0",
        changedPosition.value === -1 && "translate-x-10",
        changedPosition.value === 1 && "-translate-x-10",
        changedPosition.value === 0 && "translate-x-0",
        shouldShow.value && "opacity-100",
      )}
    >
      <div class="flex items-center w-full max-w-[75rem]">
        <TsTypography
          weight="400"
          color="base-100"
          class="text-[5rem] md:text-[6rem] max-w-[50%] md:max-w-[43.75rem] sm:pl-28 md:pl-8 lg:pl-0 select-none leading-none"
        >
          {text}
        </TsTypography>
      </div>
      <div class="w-full h-[10rem] absolute bottom-0 bg-gradient-to-t from-base-200 via-base-200 to-transparent" />
    </div>
  );
};

export const loader = (props: HeroProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsHero;
