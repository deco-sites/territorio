import type { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import useTsMediaQuery from "deco-sites/territorio/hooks/useTsMediaQuery.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { AppContext } from "../../../apps/site.ts";
import TsActionButton, {
  CTAButton,
} from "../action-button/Ts-Action-Button.tsx";
import TsNavbar from "../header/TS-Navbar.tsx";
import TsRichText from "../rich-text/TS-Rich-Text.tsx";
import { BasicImage, ImageType } from "../types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

/** @titleBy text */
type Statistic = {
  /** @description Rich text field */
  text: HTMLWidget;
  source: HTMLWidget;
};

export interface TsCourseHeroProps {
  backgroundDesktop: BasicImage;
  backgroundDesktopSmall: BasicImage;
  backgroundMobile: BasicImage;
  logo: ImageType;
  decorator: BasicImage;
  titlePrimary: string;
  titleSecondary: string;
  ctaButton: CTAButton;
  subTitle: string;
  statistics: Statistic[];
  /** @description Rich text field */
  listItems: HTMLWidget[];
}

const TsCourseHero = ({
  backgroundDesktop,
  backgroundDesktopSmall,
  backgroundMobile,
  logo,
  decorator,
  titlePrimary,
  titleSecondary,
  ctaButton,
  subTitle,
  statistics,
  listItems,
}: TsCourseHeroProps) => {
  const { currentMediaQuery } = useTsMediaQuery();
  let backgroundImage: BasicImage;
  switch (currentMediaQuery) {
    case "sm":
      backgroundImage = backgroundDesktopSmall;
      break;
    case "xs":
      backgroundImage = backgroundMobile;
      break;
    default:
      backgroundImage = backgroundDesktop;
  }

  return (
    <div
      class={clx(
        "ts-responsive",
        "sm:bg-gradient-to-b sm:from-base-200 sm:via-base-200 sm:via-80% sm:to-transparent", // parallax gradient starts
      )}
    >
      <div
        alt={backgroundImage.alt}
        style={{
          backgroundImage: `url("${backgroundImage.src}")`,
        }}
        class={clx(
          "flex justify-center bg-contain bg-no-repeat", //common
          "bg-top", //mobile
          "sm:bg-left-top", //desktop
        )}
      >
        <div
          class={clx(
            "gap-24 mt-[7%] mb-[20%] mx-20", //common
            "flex flex-col", //mobile
            "sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:mx-auto sm:max-w-[60rem]", //small
            "md:max-w-[65rem] lg:max-w-[75rem]", //larger
          )}
        >
          <div>
            <div class="w-[12.5rem] h-[3rem] absolute md:-mt-12">
              <TsNavbar items={[]} logo={logo} buttons={[]} />
            </div>
          </div>
          <div class="flex flex-col mt-[75%] sm:mt-0 sm:px-0 sm:self-end sm:ml-10">
            <Image
              src={decorator.src}
              alt={decorator.alt}
              width={66}
              height={66}
              class={clx(
                "absolute", //common
                "max-w-12 max-h-12 -ml-10 -mt-8", //mobile
                "sm:max-w-16 sm:max-h-16 sm:-ml-16 sm:-mt-12", //desktop
              )}
            />
            <div class="flex flex-col mb-8">
              <TsTypography
                color="accent-content"
                weight="500"
                class="text-6xl sm:max-w-[27rem]"
              >
                {titlePrimary}
                {" "}
              </TsTypography>
              <TsTypography color="base-100" class="text-5xl sm:max-w-[28rem]">
                {titleSecondary}
              </TsTypography>
            </div>
            <TsActionButton
              url={ctaButton.url}
              class="text-2xl w-full sm:w-auto sm:text-xl lg:text-2xl"
            >
              {ctaButton.text}
            </TsActionButton>
          </div>
          <div class="flex flex-col gap-y-7">
            <TsTypography color="accent-content" class="text-6xl">
              {subTitle}
            </TsTypography>
            {statistics.map((statistic) => (
              <div class="flex flex-col gap-y-4">
                <TsRichText class="text-base-100 text-3xl font-body">
                  {statistic.text}
                </TsRichText>
                <TsRichText class="text-base-100 text-base font-light font-body">
                  {statistic.source}
                </TsRichText>
              </div>
            ))}
          </div>
          <div class="flex flex-col gap-y-12 sm:mt-[5.5rem] sm:ml-10">
            {listItems.map((item) => (
              <li class="flex">
                <div class="bg-accent-content w-1 h-full mr-2"></div>
                <TsRichText class="text-2xl font-body text-base-100 sm:max-w-[28rem]">
                  {item}
                </TsRichText>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const loader = (
  props: TsCourseHeroProps,
  _req: Request,
  ctx: AppContext,
) => {
  return { ...props, device: ctx.device };
};

export default TsCourseHero;
