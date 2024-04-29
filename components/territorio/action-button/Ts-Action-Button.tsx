import TsButton, { ButtonProps } from "../button/TS-Button.tsx";

interface ActionButtonProps extends ButtonProps {
  url: string;
}

const TsActionButton = ({
  url,
  children,
  ...buttonProps
}: ActionButtonProps) => (
  <a href={url}>
    <TsButton
      variant="action"
      {...buttonProps}
      class="py-4 px-8 uppercase font-semibold hover:scale-110 transition-all"
    >
      {children}
    </TsButton>
  </a>
);

export default TsActionButton;
