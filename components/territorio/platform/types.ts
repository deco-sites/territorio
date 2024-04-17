import { ImageWidget } from "apps/admin/widgets.ts";

export interface SectionTitle {
  /** @title Main title */
  main: string;
  /** @title Subtitle */
  sub: string;
}

export interface Section {
  title: string;
  content: string;
}

export interface Content {
  section1: Section;
  section2: Section;
  section3: Section;
  section4: Section;
  section5: Section;
}

export interface ContentProps {
  content: Content;
  image: ImageWidget;
}
