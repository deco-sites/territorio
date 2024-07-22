import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsButton, { ButtonProps } from "../button/TS-Button.tsx";
import { useCart } from "apps/vtex/hooks/useCart.ts";
import { JSX } from "preact";

/** @titleBy text */

export interface CTAButtonProps {
  /**
   * @description  Caso passe um id de produto, essa URL será ignorada
   */
  url?: string;
  /**
   * @title Abrir em nova aba
   */
  openNewTab?: boolean;
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
   * @title Texto
   */
  text: string;
  /**
   * @title Cor do texto
   * @format  color-input
   */
  textColor?: string;
  /**
   * @title Cor do botão
   * @format  color-input
   */
  buttonColor?: string;
  /**
   * @title Habilitar background
   */
  background?: boolean;
}

export interface Props extends ButtonProps, CTAButtonProps {
}

const TsCTAButton = ({
  productID,
  text,
  url,
  seller = "1",
  class: _class,
  buttonColor,
  textColor,
  background,
  openNewTab,
  ...buttonProps
}: Props) => {
  const { addItems } = useCart();

  const colorStyle = textColor ? `${textColor} !important` : "";

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
      class={clx(
        `${
          background && "ts-block-section"
        } w-full flex justify-center py-12 md:py-16`,
        _class as string,
      )}
    >
      <a
        href={url}
        target={openNewTab ? "_blank" : "_self"}
        onClick={handleClick}
        class="block "
      >
        <TsButton
          variant="action"
          {...buttonProps}
          class={clx(
            "py-5 px-6 sm:px-8 uppercase font-semibold md:hover:scale-110 transition-all tracking-wide text-2xl w-full sm:w-auto sm:text-xl lg:text-2xl",
          )}
          style={{ backgroundColor: buttonColor }}
        >
          <p style={{ color: colorStyle }}>{text}</p>
        </TsButton>
      </a>
    </div>
  );
};

export default TsCTAButton;
