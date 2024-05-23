import { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsActionButton, {
  CTAButton,
} from "deco-sites/territorio/components/territorio/action-button/Ts-Action-Button.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";

/** @titleBy title */
interface Item {
  imageMobile: BasicImage;
  imageDesktop: BasicImage;
  title: string;
  description: string;
  ctaButton: CTAButton;
}

export interface TsLearnAlsoProps {
  title: HTMLWidget;
  items: Item[];
}

function TsLearnAlso({ title, items }: TsLearnAlsoProps) {
  return (
    <div class="hidden flex flex-col ts-section ts-responsive md:px-0 mb-[10%] sm:mb-[7%] items-center text-center md:border-t md:border-accent-content">
      <div class="border-t border-base-100 w-full mx-48 md:hidden"></div>
      <TsRichText class="text-base-100 font-medium text-6xl sm:text-7xl my-16 sm:my-20">
        {title}
      </TsRichText>
      <ul class="flex flex-col items-center gap-y-20 md:gap-y-0 md:flex-row md:justify-between w-full">
        {Object.entries(items).map(([_, item]) => (
          <li class="flex flex-col max-w-[34rem] text-left mx-10 sm:mx-0">
            <Image
              src={item.imageMobile.src}
              alt={item.imageMobile.alt}
              width={250}
              height={140}
              class="sm:hidden rounded-r-lg rounded-b-lg mb-2"
            />
            <Image
              src={item.imageDesktop.src}
              alt={item.imageDesktop.alt}
              width={546}
              height={372}
              class="hidden sm:block w-[34rem] h-[23.125rem] rounded-r-lg rounded-b-lg mb-9"
            />
            <TsTypography
              color="accent-content"
              weight="500"
              class="text-4xl sm:text-[2.625rem] sm:leading-none mb-3"
            >
              {item.title}
            </TsTypography>
            <TsTypography type="body" color="base-100" class="text-3xl mb-5">
              {item.description}
            </TsTypography>
            <TsActionButton
              url={item.ctaButton.url}
              class="px-10 py-2 text-2xl sm:text-xl lg:text-2xl sm:px-20"
            >
              {item.ctaButton.text}
            </TsActionButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TsLearnAlso;
