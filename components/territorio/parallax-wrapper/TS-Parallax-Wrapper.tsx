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
        class="hidden sm:block sm:bg-fixed sm:bg-center sm:bg-no-repeat sm:bg-cover sm:min-h-screen"
      >
        {sections.map((section) => <section.Component {...section.props} />)}
      </div>
      <div class="sm:hidden">
        {sections.map((section) => <section.Component {...section.props} />)}
      </div>
    </>
  );
}

export default TsParallaxWrapper;
