import type { ImageWidget } from "apps/admin/widgets.ts";

export interface ImageType {
  src: ImageWidget;
  alt: string;
  url?: string;
  width?: number;
  height?: number;
}

export interface ButtonType {
  name: string;
  url: string;
  icon: ImageType;
}
