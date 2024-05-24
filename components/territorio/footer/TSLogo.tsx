import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { JSX } from "preact";

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
  width?: number;
  height?: number;
  class?: string | JSX.SignalLike<string | undefined>;
}

export default function TSLogo({
  logo,
  width = 200,
  height = 200,
  class: _class,
}: Props) {
  return (
    <>
      {logo?.image && (
        <Image
          loading="lazy"
          src={logo?.image}
          alt={logo?.description}
          width={width}
          height={height}
          class={_class}
        />
      )}
    </>
  );
}
