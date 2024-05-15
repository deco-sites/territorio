import { BasicImage } from "deco-sites/territorio/components/territorio/types.ts";
import { Section } from "deco/blocks/section.ts";

export interface TsParallaxWrapperProps {
  image: BasicImage;
  sections: Section[];
}

function TsParallaxWrapper({ image, sections }: TsParallaxWrapperProps) {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${image.src}")` }}
        class="hidden md:block md:bg-fixed md:bg-center md:bg-no-repeat md:bg-cover md:min-h-screen"
      >
        {sections.map((section) => <section.Component {...section.props} />)}
      </div>
      <div class="md:hidden">
        {sections.map((section) => <section.Component {...section.props} />)}
      </div>
    </>
  );
}

export default TsParallaxWrapper;
