import type { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
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
    <div class="flex flex-col my-[7%] ts-section ts-responsive overflow-x-hidden">
      <TsRichText class="text-[5.625rem] leading-none mb-20 text-accent-content">
        {title}
      </TsRichText>
      <TsTypography class="text-7xl" color="base-100">
        {headline}
      </TsTypography>
      <ul class="flex justify-center gap-x-[3.75rem] mt-12 mb-24 self-center">
        {Object.entries(items).map(([_, item]) => (
          <li class="flex flex-col items-center text-center w-[17rem] h-[17rem] py-10 border rounded-2xl border-accent-content">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={74}
              height={74}
              class="mb-2 w-[4.625rem] h-[4.625rem]"
            />
            <TsTypography color="base-100" type="body" class="text-3xl">
              {item.text}
            </TsTypography>
          </li>
        ))}
      </ul>
      <TsTypography color="base-100" class="text-7xl max-w-[60%]">
        {subHeadline}
      </TsTypography>
      <ul class="grid grid-cols-2 gap-y-12 mt-11 mb-32">
        {Object.entries(textItems).map(([_, text]) => (
          <li class="flex items-center gap-x-2">
            <div class="bg-accent-content w-1 h-full mr-2"></div>
            <TsRichText class="text-[2rem] leading-none max-w-[75%]">
              {text}
            </TsRichText>
          </li>
        ))}
      </ul>
      <TsTypography
        color="accent-content"
        weight="500"
        class="self-center text-6xl"
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
