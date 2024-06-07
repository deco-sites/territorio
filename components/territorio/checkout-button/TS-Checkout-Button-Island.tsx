import { useCart } from "apps/vtex/hooks/useCart.ts";
import Image from "apps/website/components/Image.tsx";
import { ImageBanner } from "deco-sites/territorio/components/territorio/types.ts";
import useTsIsMobile from "deco-sites/territorio/hooks/useTsIsMobile.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";

export interface VTexCheckoutProps {
  /**
   * @title ID do Curso
   */
  productID: string;
  /**
   * @title Vendedor
   * @description Deixar em branco para usar padrão (1)
   */
  seller?: string;
}

export interface TsCheckoutButtonIslandProps extends VTexCheckoutProps {
  containerClass: string;
  checkoutBanner: ImageBanner;
}

function TsCheckoutButtonIsland({
  productID,
  seller = "1",
  containerClass,
  checkoutBanner,
}: TsCheckoutButtonIslandProps) {
  const { addItems } = useCart();
  const isMobile = useTsIsMobile();
  const image = isMobile
    ? checkoutBanner.mobileImage
    : checkoutBanner.desktopImage;

  const onAddItem = () =>
    addItems({
      orderItems: [
        {
          id: productID,
          seller: seller,
          quantity: 1,
        },
      ],
    }).then(() => {
      window.location.href = checkoutBanner.url;
    });

  return (
    <a
      id="checkout"
      name="checkout"
      onClick={onAddItem}
      target={checkoutBanner.openOnNewTab ? "_blank" : "_self"}
      class={clx(
        "transition-all w-fit h-fit p-0 cursor-pointer md:hover:scale-105",
        containerClass as string,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={isMobile ? 224 : 1172}
        height={isMobile ? 422 : 989}
        class={clx(isMobile ? "w-full px-7" : "w-[52rem] 2xl:w-[73rem]")}
      />
    </a>
  );
}

export default TsCheckoutButtonIsland;
