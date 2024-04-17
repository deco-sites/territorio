import { ImageType } from '../types.ts';

export type BasicImage = Omit<ImageType, 'url' | 'width' | 'height'>;

export interface SocialItem {
  label:
    | 'Discord'
    | 'Facebook'
    | 'Instagram'
    | 'Linkedin'
    | 'Tiktok'
    | 'Twitter'
    | 'Youtube'
    | 'WhatsApp';
  link: string;
}

/**
 * @title Paragraph
 */
type Paragraph = {
  text: string;
};

/**
 * @titleBY fullName
 */
export interface Expert {
  /**
   * @description Unique expert identifier
   */
  id: number;
  fullName: string;
  image: BasicImage;
  thumbnail: BasicImage;
  /**
   * @title Paragraph
   */
  description: Paragraph[];
  social: SocialItem[];
}
