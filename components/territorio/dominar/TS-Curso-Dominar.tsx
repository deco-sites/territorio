import { HTMLWidget } from "apps/admin/widgets.ts";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsRichText from "../rich-text/TS-Rich-Text.tsx";
import TsTypography from "../typography/TS-Typography.tsx";
import TsCursoAccordion, { Modules } from "./TS-Curso-Accordion.tsx";

export interface TsCursoDominarProps {
  titlePrimary: string;
  titleSecondary: string;
  description: HTMLWidget;
  modules: Modules;
}

const TsCursoDominar = ({
  modules,
  description,
  titlePrimary,
  titleSecondary,
}: TsCursoDominarProps) => {
  return (
    <div
      class={clx(
        "flex justify-center ts-responsive",
        "sm:bg-gradient-to-t sm:from-base-200 sm:via-base-200 sm:via-75% sm:to-transparent", // parallax gradient end
      )}
    >
      <div
        class={clx(
          "flex flex-col gap-y-16", //common
          "mx-20", //mobile
          "sm:px-0 sm:max-w-[60rem] sm:mx-0", //small
          "md:max-w-[65rem] lg:max-w-[75rem]", //larger
        )}
      >
        <TsTypography
          variant="h1"
          color="base-100"
          class="text-6xl max-w-[24rem] sm:max-w-[30rem] sm:text-[5rem]"
        >
          {titlePrimary}{" "}
          <TsTypography color="accent-content" weight="600">
            {titleSecondary}
          </TsTypography>
        </TsTypography>
        <TsRichText class="text-base-100 font-body text-[1.6rem] sm:text-2xl">
          {description}
        </TsRichText>
        <TsCursoAccordion name="accordion-item" modules={modules} />
      </div>
    </div>
  );
};

export default TsCursoDominar;
