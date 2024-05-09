import Image, { Props as ImageProps } from "apps/website/components/Image.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import { JSX } from "preact";

export interface TsImageLinkProps extends ImageProps {
  to: string;
  openOnNewTab: boolean;
  containerClass?: string | JSX.SignalLike<string | undefined>;
  hover: boolean;
}

function TsImageLink({
  to,
  openOnNewTab,
  hover = true,
  containerClass,
  ...imageProps
}: TsImageLinkProps) {
  return (
    <a
      href={to}
      target={openOnNewTab ? "_blank" : "_self"}
      class={clx(
        "w-fit h-fit p-0",
        hover ? "hover:scale-110" : "",
        containerClass as string,
      )}
    >
      <Image {...imageProps} />
    </a>
  );
}

export default TsImageLink;
