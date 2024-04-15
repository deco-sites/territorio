import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
  width?: number;
  height?: number;
}

export default function TSLogo({ logo, width = 200, height = 200 }: Props) {
  return (
    <>
      {logo?.image && (
        <Image
          loading="lazy"
          src={logo?.image}
          alt={logo?.description}
          width={width}
          height={height}
        />
      )}
    </>
  );
}
