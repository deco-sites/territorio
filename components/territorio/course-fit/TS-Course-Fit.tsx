import type { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsActionButton, {
  CTAButton,
} from "../action-button/Ts-Action-Button.tsx";
import { BasicImage } from "../types.ts";

/** @titleBy text */
interface Item {
  text: string;
  image: BasicImage;
}

export interface TsCourseFitProps {
  title: HTMLWidget;
  headline: string;
  items: Item[];
  subHeadline: string;
  /** @description Rich text field */
  textItems: HTMLWidget[];
  summary: string;
  ctaButton: CTAButton;
}

function TsCourseFit({
  title,
  headline,
  items,
  subHeadline,
  textItems,
  summary,
  ctaButton,
}: TsCourseFitProps) {
  return (
    <div
      class={clx(
        "flex flex-col ts-section ts-responsive overflow-x-hidden", //common
        "my-[10%]", //mobile
        "sm:my-[7%]", //desktop
      )}
    >
      <TsRichText
        class={clx(
          "leading-none text-accent-content", //common
          "text-[3rem] mb-10", //mobile
          "sm:text-[5.625rem] sm:mb-20", //desktop
        )}
      >
        {title}
      </TsRichText>
      <TsTypography class="text-4xl sm:text-7xl" color="base-100">
        {headline}
      </TsTypography>
      <ul
        class={clx(
          "flex", //common
          "flex-col gap-y-8 mt-6 mb-12", //mobile
          "sm:flex-row sm:mb-24 sm:self-center sm:mt-12 sm:gap-x-[3.75rem] sm:justify-center", //desktop
        )}
      >
        {Object.entries(items).map(([_, item]) => (
          <li
            class={clx(
              "flex items-center", //common
              "sm:flex-col sm:text-center sm:w-[17rem] sm:h-[17rem] sm:py-10 sm:border sm:rounded-2xl sm:border-accent-content", //desktop
            )}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={125}
              height={100}
              class="w-[4.625rem] h-[4.625rem] mr-8 sm:mb-2 sm:mr-0"
            />
            <TsTypography
              color="base-100"
              type="body"
              class="font-bold text-3xl sm:font-normal"
            >
              {item.text}
            </TsTypography>
          </li>
        ))}
      </ul>
      <TsTypography color="base-100" class="text-4xl sm:text-7xl max-w-[60%]">
        {subHeadline}
      </TsTypography>
      <ul class="grid grid-cols-1 gap-y-12 mt-11 mb-16 sm:grid-cols-2 sm:mb-32">
        {Object.entries(textItems).map(([_, text]) => (
          <li class="flex items-center gap-x-2">
            <div class="bg-accent-content w-1 h-full mr-2"></div>
            <TsRichText class="text-[1.6rem] leading-none sm:text-[2rem] sm:max-w-[75%]">
              {text}
            </TsRichText>
          </li>
        ))}
      </ul>
      <TsTypography
        color="accent-content"
        weight="500"
        class="self-center text-[2.1rem] leading-none sm:text-6xl"
      >
        {summary}
      </TsTypography>
      <TsActionButton
        url={ctaButton.url}
        linkContainerClass="self-center mt-16 mb-1"
        class="text-2xl sm:text-xl lg:text-2xl"
      >
        {ctaButton.text}
      </TsActionButton>
    </div>
  );
}

export default TsCourseFit;
