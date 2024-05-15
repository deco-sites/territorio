import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";
import { Section } from "deco/blocks/section.ts";

export interface TsParallaxWrapperProps {
  image: BasicImage;
  sections: Section[];
}

function TsParallaxWrapper({ image, sections }: TsParallaxWrapperProps) {
  return (
    <div>
      {sections.map((section) => <section.Component {...section.props} />)}
    </div>
  );
}

export default TsParallaxWrapper;
