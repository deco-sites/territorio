import type { HTMLWidget } from "apps/admin/widgets.ts";
import { ImageType } from "../types.ts";

export type BasicImage = Omit<ImageType, "url" | "width" | "height">;

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter"
    | "Youtube"
    | "WhatsApp";
  link: string;
}

/** @titleBy text */
type Paragraph = {
  text: HTMLWidget;
};

/** @titleBy fullName */
export interface Expert {
  fullName: string;
  image: ImageType;
  thumbnail: BasicImage;
  /**
   * @title Paragraph
   */
  description: Paragraph[];
  social: SocialItem[];
}
