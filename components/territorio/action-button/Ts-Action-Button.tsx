import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsButton, { ButtonProps } from "../button/TS-Button.tsx";

/** @titleBy text */
export type CTAButton = {
  text: string;
  url: string;
};

interface ActionButtonProps extends ButtonProps {
  url: string;
  linkContainerClass?: string;
}

const TsActionButton = ({
  url,
  children,
  class: _class,
  linkContainerClass,
  ...buttonProps
}: ActionButtonProps) => (
  <a href={url} class={linkContainerClass}>
    <TsButton
      variant="action"
      {...buttonProps}
      class={clx(
        "py-5 px-8 uppercase font-semibold hover:scale-110 transition-all tracking-wide",
        _class as string,
      )}
    >
      {children}
    </TsButton>
  </a>
);

export default TsActionButton;
