import TsTypography, { TypographyProps } from "../typography/TS-Typography.tsx"

type LinkProps = TypographyProps & {
  to?: string
  openOnNewTab?: boolean
}

const TsLink = ({
  to,
  openOnNewTab = false,
  children,
  ...typographyProps
}: LinkProps) => {
  return (
    <a href={to} class="w-fit p-0" target={openOnNewTab ? "_blank" : "_self"}>
      <TsTypography {...typographyProps}>{children}</TsTypography>
    </a>
  )
}

export default TsLink
