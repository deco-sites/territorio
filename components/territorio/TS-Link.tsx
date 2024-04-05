import TsTypography, { TypographyProps } from './TS-Typography.tsx';

type LinkProps = TypographyProps & {
  to: string;
  openOnNewTab?: boolean;
  children: string;
};

const TsLink = ({
  to,
  openOnNewTab = false,
  children,
  ...typographyProps
}: LinkProps) => {
  return (
    <a href={to} class='w-fit p-0' target={openOnNewTab ? '_blank' : '_self'}>
      <TsTypography {...typographyProps}>{children}</TsTypography>
    </a>
  );
};

export default TsLink;
