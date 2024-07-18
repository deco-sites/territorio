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
        window.location.href = "/checkout";
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
      class={`${
        background && "ts-block-section"
      } w-full flex justify-center py-4`}
    >
      <a
        href={url}
        onClick={handleClick}
        class="block my-8 md:my-12"
      >
        <TsButton
          variant="action"
          {...buttonProps}
          class={clx(
            "py-5 px-6 sm:px-8 uppercase font-semibold md:hover:scale-110 transition-all tracking-wide text-2xl w-full sm:w-auto sm:text-xl lg:text-2xl",
            _class as string,
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
