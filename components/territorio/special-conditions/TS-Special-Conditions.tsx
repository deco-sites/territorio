import TsImageLink from "deco-sites/territorio/components/territorio/image-link/TS-Image-Link.tsx";
import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";

interface Banner {
  url: string;
  openOnNewTab: boolean;
  mobileImage: BasicImage;
  desktopImage: BasicImage;
}

export interface TsSpecialConditionsProps {
  topBanner: Banner;
  bottomBanner: Banner;
}

function TsSpecialConditions({
  topBanner,
  bottomBanner,
}: TsSpecialConditionsProps) {
  return (
    <div class="flex flex-col ts-section ts-responsive items-center my-[10%] gap-y-16 sm:my-[7%] sm:gap-y-56">
      <TsImageLink
        to={topBanner.url}
        openOnNewTab={topBanner.openOnNewTab}
        src={topBanner.desktopImage.src}
        alt={topBanner.desktopImage.alt}
        width={1172}
        height={443}
        containerClass="hidden sm:block w-full"
        class="w-[73.25rem]"
      />
      <TsImageLink
        to={topBanner.url}
        openOnNewTab={topBanner.openOnNewTab}
        src={topBanner.mobileImage.src}
        alt={topBanner.mobileImage.alt}
        width={269}
        height={208}
        containerClass="sm:hidden w-full"
        class="w-full"
      />
      <TsImageLink
        to={bottomBanner.url}
        openOnNewTab={bottomBanner.openOnNewTab}
        src={bottomBanner.desktopImage.src}
        alt={bottomBanner.desktopImage.alt}
        width={1172}
        height={443}
        containerClass="hidden sm:block w-full"
        class="w-[73.25rem]"
      />
      <TsImageLink
        to={bottomBanner.url}
        openOnNewTab={bottomBanner.openOnNewTab}
        src={bottomBanner.mobileImage.src}
        alt={bottomBanner.mobileImage.alt}
        width={224}
        height={422}
        containerClass="sm:hidden w-full"
        class="w-full px-7"
      />
    </div>
  );
}

export default TsSpecialConditions;
