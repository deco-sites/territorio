import { ImageType } from "../types.ts";
import type { HTMLWidget } from "apps/admin/widgets.ts";

export type BasicImage = Omit<ImageType, "url" | "width" | "height">;

/**
 * @title Carousel items
 */
export interface TerritoriosCarouselItem {
  image: BasicImage;
  title: string;
  description: HTMLWidget;
}
