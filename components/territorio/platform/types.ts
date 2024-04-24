import { ImageWidget } from "apps/admin/widgets.ts";

export interface SectionTitle {
  /** @title Main title */
  main: string;
  /** @title Subtitle */
  sub: string;
}

export interface Section {
  /** @title Title */
  title: string;
  /** @title Content */
  content: string;
}

export interface Content {
  /** @title Section 1 */
  /** @description top left */
  section1: Section;
  /** @title Section 2 */
  /** @description top right */
  section2: Section;
  /** @title Section 3 */
  /** @description middle right */
  section3: Section;
  /** @title Section 4 */
  /** @description bottom left */
  section4: Section;
  /** @title Section 5 */
  /** @description bottom right */
  section5: Section;
}

export interface ContentProps {
  content: Content;
  image: ImageWidget;
}
