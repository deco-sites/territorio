import type { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
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
  disclaimerItems: string[];
}

function TsWarranty({ items, description, disclaimerItems }: TsWarrantyProps) {
  return (
    <div
      class={clx(
        "flex flex-col ts-section ts-responsive items-center overflow-x-hidden text-center", //common
        "py-[10%]", //mobile
        "sm:py-[7%] md:border-t md:border-base-100 sm:gap-y-16 mt-20", //desktop
      )}
    >
      <TsRichText class="text-3xl md:text-4xl sm:max-w-[44rem] md:max-w-[52rem]">
        {description}
      </TsRichText>
      <ul class="flex justify-between px-9 w-full">
        {items.map(({ description, image, title }) => (
          <li class="flex flex-col text-center items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={86}
              height={86}
              class="sm:w-[4rem] md:w-[5.5rem] sm:h-[4rem] md:h-[5.5rem]"
            />
            <TsTypography
              color="accent-content"
              weight="500"
              type="body"
              class="sm:text-2xl md:text-3xl mt-6 mb-3"
            >
              {title}
            </TsTypography>
            <TsTypography
              color="base-100"
              weight="300"
              type="body"
              class="sm:text-xl md:text-2xl sm:max-w-[16rem] md:max-w-[18rem]"
            >
              {description}
            </TsTypography>
          </li>
        ))}
      </ul>
      <div class="flex flex-col text-left self-start">
        {disclaimerItems.map((item) => (
          <TsRichText class="font-light sm:text-lg md:text-xl font-body">
            {item}
          </TsRichText>
        ))}
      </div>
    </div>
  );
}

export default TsWarranty;
