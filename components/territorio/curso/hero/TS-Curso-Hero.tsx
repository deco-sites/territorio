import type { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsActionButton from "deco-sites/territorio/components/territorio/action-button/Ts-Action-Button.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { BasicImage } from "../../types.ts";

/** @titleBy text */
type Statistic = {
  /** @description Rich text field */
  text: HTMLWidget;
  source: HTMLWidget;
};

/** @titleBy text */
type CTAButton = {
  text: string;
  url: string;
};

export interface TsCursoHeroProps {
  background: BasicImage;
  decorator: BasicImage;
  titlePrimary: string;
  titleSecondary: string;
  ctaButton: CTAButton;
  subTitle: string;
  statistics: Statistic[];
  /** @description Rich text field */
  listItems: HTMLWidget[];
}

const TsCursoHero = ({
  background,
  decorator,
  titlePrimary,
  titleSecondary,
  ctaButton,
  subTitle,
  statistics,
  listItems,
}: TsCursoHeroProps) => {
  return (
    <div
      class="flex justify-center bg-top bg-contain bg-no-repeat ts-responsive"
      style={{
        backgroundImage: `url("${background.src}")`,
      }}
    >
      <div
        class={clx(
          "gap-24 my-[7%]", //common
          "flex flex-col mx-20", //mobile
          "sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:mx-auto sm:max-w-[60rem]", //small
          "md:max-w-[65rem] lg:max-w-[75rem]", //larger
        )}
      >
        <div />
        <div class="flex flex-col sm:self-end sm:ml-10">
          <Image
            src={decorator.src}
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
            class="text-2xl sm:text-xl lg:text-2xl"
          >
            {ctaButton.text}
          </TsActionButton>
        </div>
        <div class="flex flex-col gap-y-7">
          <TsTypography color="accent-content" class="text-6xl">
            {subTitle}
          </TsTypography>
          {statistics.map((statistic) => (
            <div key={statistic.text} class="flex flex-col gap-y-4">
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
            <li key={item} class="flex">
              <div class="bg-accent-content w-1 h-full mr-2"></div>
              <TsRichText class="text-2xl font-body text-base-100 sm:max-w-[28rem]">
                {item}
              </TsRichText>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TsCursoHero;
