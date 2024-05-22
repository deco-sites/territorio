import TsImageLink from "deco-sites/territorio/components/territorio/image-link/TS-Image-Link.tsx";
import { ImageBanner } from "deco-sites/territorio/components/territorio/types.ts";

export interface TsExtraBonusProps {
  banner: ImageBanner;
}

function TsExtraBonus({ banner }: TsExtraBonusProps) {
  return (
    <div class="flex justify-center ts-section ts-responsive my-[10%] sm:my-[7%]">
      <TsImageLink
        to={banner.url}
        openOnNewTab={banner.openOnNewTab}
        src={banner.desktopImage.src}
        alt={banner.desktopImage.alt}
        width={1168}
        height={1043}
        containerClass="hidden sm:block"
        class="w-[48rem] 2xl:w-[73rem]"
      />
      <TsImageLink
        to={banner.url}
        openOnNewTab={banner.openOnNewTab}
        src={banner.mobileImage.src}
        alt={banner.mobileImage.alt}
        width={268}
        height={300}
        containerClass="sm:hidden w-full"
        class="w-full"
      />
    </div>
  );
}

export default TsExtraBonus;
