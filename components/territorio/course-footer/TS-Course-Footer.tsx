import { HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";

export interface TsCourseFooter {
  logoLeftDesktop: BasicImage;
  logoLeftMobile: BasicImage;
  logoRightDesktop: BasicImage;
  logoRightMobile: BasicImage;
  /** @description Rich text field */
  copyrightText: HTMLWidget;
}
function TsCourseFooter({
  logoLeftDesktop,
  logoLeftMobile,
  logoRightDesktop,
  logoRightMobile,
  copyrightText,
}: TsCourseFooter) {
  return (
    <div class="flex flex-col items-center ts-section ts-responsive gap-y-14 sm:gap-y-28 py-[10%] sm:py-[7%]">
      <div class="flex gap-x-32 items-center">
        <Image
          alt={logoLeftMobile.alt}
          src={logoLeftMobile.src}
          width={112}
          height={28}
          class="sm:hidden min-w-[12rem]"
        />
        <Image
          alt={logoLeftDesktop.alt}
          src={logoLeftDesktop.src}
          width={296}
          height={72}
          class="hidden sm:block w-[18.5rem]"
        />
        <Image
          alt={logoRightMobile.alt}
          src={logoRightMobile.src}
          width={112}
          height={28}
          class="sm:hidden min-w-[12rem]"
        />
        <Image
          alt={logoRightDesktop.alt}
          src={logoRightDesktop.src}
          width={296}
          height={72}
          class="hidden sm:block w-[18.5rem]"
        />
      </div>
      <TsRichText class="text-xl text-base-100 font-body">
        {copyrightText}
      </TsRichText>
    </div>
  );
}

export default TsCourseFooter;
