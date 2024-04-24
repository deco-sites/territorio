import Image from "apps/website/components/Image.tsx";
import type { JSX } from "preact";
import { clx } from "../../../sdk/clx.ts";
import { ImageType } from "../types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

type ButtonVariant = "primary";

export type ButtonProps = Omit<JSX.IntrinsicElements["button"], "loading"> & {
  loading?: boolean;
  ariaLabel?: string;
  icon?: ImageType;
  variant?: ButtonVariant;
};

const VARIANT_COLORS: Record<ButtonVariant, string> = {
  primary: "bg-accent-content",
};

const Button = ({
  type = "button",
  class: _class = "",
  loading,
  disabled,
  ariaLabel,
  icon,
  variant = "primary",
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    type={type}
    className={clx(`rounded-md ${VARIANT_COLORS[variant]} ${_class}`)}
    disabled={disabled || loading}
    aria-label={ariaLabel || props["aria-label"]}
  >
    {loading
      ? <span class="loading loading-spinner" />
      : (
        <div class="flex gap-x-3 items-center justify-center">
          {!!icon && (
            <Image
              src={icon.src}
              alt={icon.alt}
              width={icon.width || 32}
              height={icon.height || 32}
            />
          )}
          <TsTypography type="body" color="base-content">
            {children}
          </TsTypography>
        </div>
      )}
  </button>
);

export default Button;
