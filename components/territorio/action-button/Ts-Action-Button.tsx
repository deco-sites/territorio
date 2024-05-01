import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsButton, { ButtonProps } from "../button/TS-Button.tsx";

interface ActionButtonProps extends ButtonProps {
  url: string;
}

const TsActionButton = ({
  url,
  children,
  class: _class,
  ...buttonProps
}: ActionButtonProps) => (
  <a href={url}>
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
