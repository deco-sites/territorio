import { useSignal } from "@preact/signals";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import type { MediaQueryKey } from "deco-sites/territorio/hooks/useTsMediaQuery.tsx";
import useTsMediaQuery from "deco-sites/territorio/hooks/useTsMediaQuery.tsx";
import { useRef } from "preact/hooks";
import { AppContext } from "../../../apps/site.ts";
import Icon, { AvailableIcons } from "../../../components/ui/Icon.tsx";
import TsCarouselIsland from "../../../islands/territorio/TS-Carousel.tsx";
import { clx } from "../../../sdk/clx.ts";
import TsTypography from "../typography/TS-Typography.tsx";

/**
 * @titleBy name
 */
export interface Course {
  name: string;
  imageSrc: ImageWidget;
  alt: string;
  url?: string;
  isActive?: boolean;
}

export interface CursosProps {
  courses: Course[];
}

const FIRST_SHOWN_INDEX = 0;
const MAX_SHOWN = 4;

const ITEMS_WIDTH: Record<MediaQueryKey, number> = {
  xs: 0,
  sm: 137,
  md: 164,
  lg: 195,
  xl: 249,
  "2xl": 303,
};

const ArrowButton = ({
  icon,
  onClick,
}: {
  icon: AvailableIcons;
  onClick: () => void;
}) => (
  <button
    class="hidden sm:inline-block h-[calc(100%-80px)] px-2"
    onClick={onClick}
  >
    <Icon
      id={icon}
      class="text-accent-content sm:max-w-12 sm:max-h-12 lg:max-w-16 lg:max-h-16 xl:max-w-20 xl:max-h-20 2xl:max-w-24 2xl:max-h-24 sm:stroke-1"
    />
  </button>
);

const TsCursos = ({ courses }: CursosProps) => {
  const { currentMediaQuery } = useTsMediaQuery();
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentIndex = useSignal(FIRST_SHOWN_INDEX);

  const onNext = () => {
    currentIndex.value++;
    carouselRef.current?.scrollTo({
      left: ITEMS_WIDTH[currentMediaQuery] * currentIndex.value,
      behavior: "smooth",
    });
    currentIndex.value = Math.min(
      currentIndex.value,
      courses.length - MAX_SHOWN,
    );
  };

  const onPrevious = () => {
    currentIndex.value--;
    carouselRef.current?.scrollTo({
      left: ITEMS_WIDTH[currentMediaQuery] * currentIndex.value,
      behavior: "smooth",
    });
    currentIndex.value = Math.max(currentIndex.value, FIRST_SHOWN_INDEX);
  };

  return (
    <div
      id="cursos"
      class={clx(
        "flex sm:justify-center items-center relative z-30 overflow-x-hidden sm:overflow-x-auto select-none",
        "-mt-[178px] md:-mt-[146px] lg:-mt-[176px] xl:-mt-[231px] 2xl:-mt-[285px]", // offset
      )}
    >
      <ArrowButton icon="ChevronLeft" onClick={onPrevious} />
      <TsCarouselIsland
        ref={carouselRef}
        showBar={false}
        class="overflow-x-auto snap-x snap-mandatory scrollbar-hide w-screen sm:w-full"
      >
        <>
          <ul
            class={clx(
              "flex ",
              "pl-[44px] gap-x-[14px]",
              "sm:px-0 sm:py-2 sm:max-w-[544px]",
              "md:py-4 md:px-2 md:gap-x-4 md:max-w-[664px]",
              "lg:py-6 lg:gap-x-5 lg:max-w-[776px]",
              "xl:py-8 xl:px-3 xl:gap-x-6 xl:max-w-[996px]",
              "2xl:py-10 2xl:px-4 2xl:gap-x-8 2xl:max-w-[1212px]",
            )}
          >
            {courses.map((course) => (
              <li class="last:pr-[60px] md:last:pr-0">
                <a
                  href={course.url}
                  disabled={!course?.isActive}
                  class={clx(
                    "flex flex-col items-center",
                    course?.isActive
                      ? "md:hover:scale-105"
                      : "pointer-events-none",
                  )}
                >
                  {!course?.isActive && (
                    <div class="w-fit rounded-b-md bg-base-300 z-10">
                      <TsTypography
                        type="body"
                        weight="800"
                        class="mx-3 md:mx-5 my-2 md:my-3 text-lg md:text-xl 2xl:text-2xl"
                      >
                        BREVE
                      </TsTypography>
                    </div>
                  )}
                  <Image
                    alt={course.alt}
                    src={course.imageSrc}
                    width={271}
                    height={486}
                    class={clx(
                      "max-w-[125px] md:max-w-[150px] lg:max-w-[175px] xl:max-w-[225px] 2xl:max-w-[271px]",
                      !course?.isActive ? "-mt-8" : "",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </>
      </TsCarouselIsland>
      <ArrowButton icon="ChevronRight" onClick={onNext} />
    </div>
  );
};

export const loader = (props: CursosProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsCursos;
