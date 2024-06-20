import Image from "apps/website/components/Image.tsx";
import type { ComponentChildren, JSX } from "preact";
import { clx } from "../../../sdk/clx.ts";
import { ImageType } from "../types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

type ButtonVariant = "primary" | "action";

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "loading"> & {
  loading?: boolean;
  ariaLabel?: string;
  icon?: ImageType;
  variant?: ButtonVariant;
  iconClass?: string | JSX.SignalLike<string | undefined>;
};

const VARIANT_COLORS: Record<ButtonVariant, string> = {
  primary: "bg-accent-content",
  action: "bg-base-300",
};

const TextContent = ({ children }: { children: ComponentChildren }) => (
  <TsTypography type="body" color="base-content">
    {children}
  </TsTypography>
);

const Button = ({
  type = "button",
  class: _class = "",
  iconClass,
  divIconClass,
  loading,
  disabled,
  ariaLabel,
  icon,
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  if (loading) return <span class="loading loading-spinner" />;

  return (
    <button
      {...props}
      type={type}
      className={clx(`rounded-md ${VARIANT_COLORS[variant]} ${_class}`)}
      disabled={disabled || loading}
      aria-label={ariaLabel || props["aria-label"]}
    >
      {icon
        ? (
          <div
            className={"flex gap-x-3 items-center justify-center " +
              divIconClass}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width || 32}
              height={icon.height || 32}
              class={iconClass}
            />
            <TextContent>{children}</TextContent>
          </div>
        )
        : <TextContent>{children}</TextContent>}
    </button>
  );
};

export default Button;
