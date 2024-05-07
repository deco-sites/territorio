import Image from "apps/website/components/Image.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import TsCarouselBarIsland from "../../../islands/territorio/TS-Carousel.tsx";
import { BasicImage } from "../types.ts";

/** @titleBy text */
interface Quote {
  text: string;
  author: string;
}

export interface TsExpertQuotesProps {
  quotes: Quote[];
  decorator: BasicImage;
  desktopImage: BasicImage;
  mobileImage: BasicImage;
  delay?: number;
}

function TsExpertQuotes({
  desktopImage,
  mobileImage,
  decorator,
  quotes,
  delay = 5000,
}: TsExpertQuotesProps) {
  return (
    <div class="flex flex-col my-[7%] ts-section overflow-x-hidden">
      <Image
        src={decorator.src}
        alt={decorator.alt}
        width={69}
        height={69}
        class="absolute sm:-mt-[2rem] md:-mt-[3rem] sm:-ml-[1.8rem] md:-ml-[2rem] sm:w-[3rem] md:w-[4.3125rem] sm:h-[3rem] md:h-[4.3125rem]"
      />
      <TsCarouselBarIsland
        containerClassName="flex flex-col gap-8 sm:mb-16 md:mb-24"
        class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-screen"
        showBar={false}
        autoChangeDelay={delay}
      >
        {Object.entries(quotes).map(([_, quote]) => (
          <div class="flex flex-col gap-y-8 min-w-full">
            <TsTypography
              color="accent-content"
              weight="500"
              class="text-[4rem] leading-none sm:max-w-[54rem] md:max-w-[61.625rem]"
            >
              {quote.text}
            </TsTypography>
            <TsTypography color="base-100" class="text-[2.75rem]">
              {quote.author}
            </TsTypography>
          </div>
        ))}
      </TsCarouselBarIsland>
      <Image
        src={mobileImage.src}
        alt={mobileImage.alt}
        width={271}
        height={165}
        class="sm:hidden"
      />
      <Image
        src={desktopImage.src}
        alt={desktopImage.alt}
        width={986}
        height={598}
        class="hidden sm:block w-[61.625rem]"
      />
    </div>
  );
}

export default TsExpertQuotes;
