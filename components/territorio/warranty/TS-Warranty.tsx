import type { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsCarouselIsland from "../../../islands/territorio/TS-Carousel.tsx";
import { BasicImage } from "../types.ts";

/** @titleBy title */
interface Item {
  image: BasicImage;
  title: string;
  description: string;
}

export interface TsWarrantyProps {
  description: HTMLWidget;
  items: Item[];
  disclaimerItems: HTMLWidget[];
}

const ItemsList = ({ items }: { items: Item[] }) => (
  <>
    {items.map(({ description, image, title }) => (
      <li class="flex flex-col p-6 sm:p-0 text-center items-center bg-[#23282D] rounded-lg sm:bg-transparent sm:rounded-none min-w-[60vw] sm:min-w-0">
        <Image
          src={image.src}
          alt={image.alt}
          width={86}
          height={86}
          class="w-[4.5rem] h-[4.5rem] sm:w-[4rem] md:w-[5.5rem] sm:h-[4rem] md:h-[5.5rem]"
        />
        <TsTypography
          color="accent-content"
          weight="500"
          type="body"
          class="text-3xl sm:text-2xl md:text-3xl mt-8 sm:mt-6 mb-5 sm:mb-3"
        >
          {title}
        </TsTypography>
        <TsTypography
          color="base-100"
          weight="300"
          type="body"
          class="text-2xl sm:text-xl md:text-2xl sm:max-w-[16rem] md:max-w-[18rem]"
        >
          {description}
        </TsTypography>
      </li>
    ))}
  </>
);

function TsWarranty({ items, description, disclaimerItems }: TsWarrantyProps) {
  return (
    <div
      class={clx(
        "flex flex-col gap-y-16 mt-20 ts-section ts-responsive items-center text-center overflow-x-hidden sm:overflow-x-auto", //common
        "py-[10%]", //mobile
        "sm:py-[7%] md:border-t md:border-base-100", //desktop
      )}
    >
      <TsRichText class="text-3xl md:text-4xl max-w-[26rem] sm:max-w-[44rem] md:max-w-[52rem]">
        {description}
      </TsRichText>
      {/* Mobile */}
      <TsCarouselIsland
        showBar={false}
        autoChangeDelay={5000}
        class={clx(
          "overflow-x-auto snap-x snap-mandatory scrollbar-hide w-screen", // Carousel required
          "flex gap-x-[40vw] px-[20vw] sm:hidden",
        )}
      >
        <ItemsList items={items} />
      </TsCarouselIsland>
      {/* Desktop */}
      <ul class="hidden sm:flex justify-between px-9 w-full">
        <ItemsList items={items} />
      </ul>
      <div class="flex flex-col text-left sm:self-start">
        {disclaimerItems.map((item) => (
          <TsRichText class="font-light text-xl sm:text-lg md:text-xl font-body">
            {item}
          </TsRichText>
        ))}
      </div>
    </div>
  );
}

export default TsWarranty;
