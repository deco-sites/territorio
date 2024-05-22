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
  console.log({ checkoutBanner });
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
        height={207}
        containerClass="sm:hidden w-full"
        class="w-full"
      />
      <TsCheckoutButton
        id="checkout"
        productID={productID}
        seller={seller}
        to={checkoutBanner.url}
        openOnNewTab={checkoutBanner.openOnNewTab}
        src={checkoutBanner.desktopImage.src}
        alt={checkoutBanner.desktopImage.alt}
        width={1172}
        height={989}
        containerClass="hidden sm:block w-full"
        class="w-[73.25rem]"
      />
      <TsCheckoutButton
        id="checkout"
        productID={productID}
        seller={seller}
        to={checkoutBanner.url}
        openOnNewTab={checkoutBanner.openOnNewTab}
        src={checkoutBanner.mobileImage.src}
        alt={checkoutBanner.mobileImage.alt}
        width={224}
        height={422}
        containerClass="sm:hidden w-full"
        class="w-full px-7"
      />
    </div>
  );
}

export default TsSpecialConditions;
