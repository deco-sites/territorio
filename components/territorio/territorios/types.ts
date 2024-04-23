import { ImageType } from "../types.ts";

export type BasicImage = Omit<ImageType, "url" | "width" | "height">;

/**
 * @title Carousel items
 */
export interface TerritoriosCarouselItem {
  image: BasicImage;
  title: string;
  description: string;
}
