import { useCart } from "apps/vtex/hooks/useCart.ts";
import Image from "apps/website/components/Image.tsx";
import { TsImageLinkProps } from "deco-sites/territorio/components/territorio/image-link/TS-Image-Link.tsx";
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

export interface TsCheckoutButtonIslandProps
  extends TsImageLinkProps, VTexCheckoutProps {}

function TsCheckoutButtonIsland({
  to,
  openOnNewTab,
  hover = true,
  containerClass,
  productID,
  seller = "1",
  ...imageProps
}: TsCheckoutButtonIslandProps) {
  const { addItems } = useCart();

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
      window.location.href = to;
    });

  return (
    <a
      onClick={onAddItem}
      target={openOnNewTab ? "_blank" : "_self"}
      class={clx(
        "transition-all w-fit h-fit p-0 cursor-pointer",
        hover ? "hover:scale-105" : "",
        containerClass as string,
      )}
    >
      <Image {...imageProps} />
    </a>
  );
}

export default TsCheckoutButtonIsland;
