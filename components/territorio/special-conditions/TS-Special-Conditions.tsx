import { VTexCheckoutProps } from "deco-sites/territorio/components/territorio/checkout-button/TS-Checkout-Button-Island.tsx";
import TsImageLink from "deco-sites/territorio/components/territorio/image-link/TS-Image-Link.tsx";
import { ImageBanner } from "deco-sites/territorio/components/territorio/types.ts";
import TsCheckoutButton from "../../../islands/territorio/TS-CheckoutButton.tsx";

export interface TsSpecialConditionsProps extends VTexCheckoutProps {
  topBanner: ImageBanner;
  checkoutBanner: ImageBanner;
}

function TsSpecialConditions({
  topBanner,
  checkoutBanner,
  productID,
  seller,
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
        containerClass="hidden sm:block"
        class="w-[52rem] 2xl:w-[73rem]"
      />
      <TsImageLink
        to={topBanner.url}
        openOnNewTab={topBanner.openOnNewTab}
        src={topBanner.mobileImage.src}
        alt={topBanner.mobileImage.alt}
        width={269}
        height={207}
        containerClass="sm:hidden w-full"
        class="w-full"
      />
      <TsCheckoutButton
        productID={productID}
        seller={seller}
        checkoutBanner={checkoutBanner}
        containerClass="w-full sm:w-auto"
      />
    </div>
  );
}

export default TsSpecialConditions;
