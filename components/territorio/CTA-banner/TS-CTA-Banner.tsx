import { useCart } from "apps/vtex/hooks/useCart.ts";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { JSX } from "preact";

interface BannerImage {
  source: ImageWidget;
  alt: string;
  /**
   * @title Largura
   * @description  Ao passar a largura e a altura, você está definindo a proporção da sua imagem
   */
  width?: number;
  /**
   * @title Altura
   * @description  Ao passar um ID de produto, o botão levará o usuário a página de checkout quando o botão for clicado
   */
  height?: number;
}

export interface CTABannerProps {
  /**
   * @description  Caso passe um id de produto, essa URL será ignorada
   */
  url?: string;
  /**
   * @title Abrir em nova aba
   */
  openNewTab?: boolean;
  /**
   * @title Imagem Desktop
   */
  desktopImage: BannerImage;
  /**
   * @title Imagem Mobile
   */
  mobileImage: BannerImage;
  /**
   * @title ID do Curso
   * @description  Ao passar um ID de produto, o botão levará o usuário a página de checkout quando o botão for clicado
   */
  productID?: string;
  /**
   * @title Vendedor
   * @description Deixar em branco para usar padrão (1)
   */
  seller?: string;
  /**
   * @title ID da seção
   */
  sectionId: string;
}

function TsCTABanner({
  ...props
}: CTABannerProps) {
  const { addItems } = useCart();

  const {
    productID,
    seller = "1",
    sectionId,
    desktopImage,
    mobileImage,
    url,
    openNewTab,
  } = props;

  const onAddItem = () => {
    if (productID) {
      addItems({
        orderItems: [
          {
            id: productID,
            seller: seller,
            quantity: 1,
          },
        ],
      }).then(() => {
        /* window.location.href = "/checkout"; */

        const target = openNewTab ? "_blank" : "_self";

        globalThis.open("/checkout", target);
      });
    }
  };

  const handleClick = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    if (productID) {
      e.preventDefault();
      onAddItem();
    }
  };

  return (
    <div
      id={sectionId}
      name={sectionId}
      class="flex flex-col ts-section ts-responsive items-center my-[10%] gap-y-16 sm:my-[7%] sm:gap-y-56"
    >
      <a
        href={url}
        target={openNewTab ? "_blank" : "_self"}
        onClick={handleClick}
        class={clx(
          "transition-all p-0 cursor-pointer hover:scale-105",
        )}
      >
        <Picture>
          <Source
            media="(max-width: 639px)"
            src={mobileImage.source}
            width={mobileImage?.width || 1172}
            height={mobileImage?.height || 989}
            alt={mobileImage.alt}
          />
          <Source
            media="(min-width: 640px)"
            src={desktopImage.source}
            width={desktopImage?.width || 430}
            height={desktopImage?.height || 590}
            alt={desktopImage.alt}
          />
          <img
            class="object-cover"
            src={desktopImage.source}
            alt={desktopImage.alt}
          />
        </Picture>
      </a>
    </div>
  );
}

export default TsCTABanner;
