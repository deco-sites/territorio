import { useSignal, useSignalEffect } from "@preact/signals";
import { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";
import useTsMediaQuery from "deco-sites/territorio/hooks/useTsMediaQuery.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { AppContext } from "../../../apps/site.ts";
import { useTsCarrousel } from "../../../hooks/useTsCarrousel.tsx";
import { getColorFromVar } from "deco-sites/territorio/sdk/territorio/getColorFromVar.ts";
import TsCarouselBar from "../carousel/TS-Carousel-Bar.tsx";

/** @titleBy title */
interface Banner {
  mobileBackgroundImage: BasicImage;
  smallBackgroundImages: BasicImage;
  largeBackgroundImages: BasicImage;
  title: HTMLWidget;
  /** @description opcional */
  subtitle?: HTMLWidget;
  url?: string;
  /** @description opcional */
  image?: BasicImage;
}

export interface HeroProps {
  banners: Banner[];
}

const TsHero = ({ banners }: HeroProps) => {
  const changedPosition = useSignal(0);
  const shouldShow = useSignal(true);
  const {
    visibleItems,
    currentIndex,
    setCurrentIndex,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious
  } = useTsCarrousel<Banner>({
    items: banners,
    visibleItemsCountParam: 1,
    shouldCycle: true,
    autoChangeDelay: 5000,
    onChangeCallback: () => {
      shouldShow.value = false;
      changedPosition.value = 1;
    },
  });
  const visibleBanner = visibleItems[0];
  const { currentMediaQuery } = useTsMediaQuery();
  let backgroundImage: BasicImage;
  switch (currentMediaQuery) {
    case "xs":
      backgroundImage = visibleBanner.mobileBackgroundImage;
      break;
    case "sm":
      backgroundImage = visibleBanner.smallBackgroundImages;
      break;
    default:
      backgroundImage = visibleBanner.largeBackgroundImages;
  }

  useSignalEffect(() => {
    if (changedPosition.value !== 0) {
      shouldShow.value = false;
      setTimeout(() => {
        changedPosition.value = 0;
        setTimeout(() => {
          shouldShow.value = true;
        }, 0);
      }, 100);
    }
  });

  let touchStartX = 0;
  let touchEndX = 0;
  
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      onNext();
    }

    if (touchEndX - touchStartX > 50) {
      onPrevious();
    }
  };

  const hasImage = !!visibleBanner.image;
  return (
    <div
      class="flex justify-center items-center h-screen relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute z-10 bottom-[35%] sm:bottom-[35%] md:bottom-[20%] lg:bottom-[20%] xl:bottom-[30%] 2xl:bottom[35%] w-full flex justify-center">
        <TsCarouselBar
          items={banners}
          currentId={currentIndex}
          onItemClick={setCurrentIndex}
          activeColor="base-300"
        />
      </div>
      <div class="absolute left-[10%] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <button onClick={onPrevious} disabled={!hasPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="107"
            viewBox="0 0 33 107"
            fill="none"
          >
            <path
              d="M31.975 1L1 53.7598L31.975 106.52"
              stroke={getColorFromVar("base-100")}
              stroke-width="4"
            />
          </svg>
        </button>
      </div>
      <div class="absolute right-[10%] top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
        <button onClick={onNext} disabled={!hasNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="107"
            viewBox="0 0 33 107"
            fill="none"
          >
            <path
              d="M0.852051 1L31.8221 53.7598L0.852051 106.52"
              stroke={getColorFromVar("base-100")}
              stroke-width="4"
            />
          </svg>
        </button>
      </div>
      <a
        href={visibleBanner.url}
        disabled={!visibleBanner.url}
        class="relative w-full h-full"
      >
        <div
          style={{
            backgroundImage: `url("${backgroundImage.src}")`,
          }}
          class={clx(
            "flex justify-center ts-responsive bg-cover bg-no-repeat sm:bg-right-top items-center h-screen",
            "transition-all ease-in-out duration-200 transform opacity-0",
            changedPosition.value === -1 && "translate-x-10",
            changedPosition.value === 1 && "-translate-x-10",
            changedPosition.value === 0 && "translate-x-0",
            shouldShow.value && "opacity-100",
          )}
        >
          <div
            class={clx(
              hasImage
                ? "-mt-[220px] lg:-mt-[180px] xl:-mt-[150px] 2xl:-mt-[120px]"
                : "",
              "flex items-center w-full max-w-[75rem] pl-[44px] pr-[35px] md:px-8 lg:px-0",
            )}
          >
            {hasImage ? (
              <Image
                src={visibleBanner.image?.src || ""}
                alt={visibleBanner.image?.alt}
                width={226}
                height={405}
                class="min-w-[97px] max-w-[150px] sm:max-w-max sm:min-w-max sm:w-[14.125rem] sm:h-[25.3125rem] mr-[2.125rem]"
              />
            ) : null}
            <div class="flex flex-col gap-y-4">
              <TsRichText
                class={clx(
                  "select-none text-base-100 md:max-w-[43.75rem] leading-[110%]",
                  hasImage // variants
                    ? "text-[30px] sm:text-[36px] md:text-[5.25rem] font-bold"
                    : "text-[34px] sm:text-[6rem] font-semibold sm:font-normal max-w-[50%]",
                )}
              >
                {visibleBanner.title}
              </TsRichText>
              {visibleBanner.subtitle ? (
                <TsRichText class="select-none text-base-100 font-body text-[15px] sm:text-[18px] md:text-[2.3125rem] leading-[130%] sm:max-w-[75%] font-semibold md:max-w-[34rem]">
                  {visibleBanner.subtitle as string}
                </TsRichText>
              ) : null}
            </div>
          </div>
          <div class="w-full h-[10rem] absolute bottom-0 bg-gradient-to-t from-base-200 via-base-200 to-transparent" />
        </div>
      </a>
    </div>
  );
};

export const loader = (props: HeroProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};
export default TsHero;