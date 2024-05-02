import { HTMLWidget } from "apps/admin/widgets.ts";
import TsCursoAccordion from "deco-sites/territorio/components/territorio/curso/dominar/TS-Curso-Accordion.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsActionButton, {
  CTAButton,
} from "../../action-button/Ts-Action-Button.tsx";
import TsTypography from "../../typography/TS-Typography.tsx";

/** @title {{{title}}} */
export interface Question {
  title: string;
  /** @format textarea */
  description: string;
}

export interface TsCursoDominarProps {
  titlePrimary: string;
  titleSecondary: string;
  description: HTMLWidget;
  ctaButton: CTAButton;
  questions: Question[];
}

const TsCursoDominar = ({
  questions,
  ctaButton,
  description,
  titlePrimary,
  titleSecondary,
}: TsCursoDominarProps) => {
  return (
    <div class="flex justify-center ts-responsive">
      <div
        class={clx(
          "flex flex-col my-[7%] gap-y-16", //common
          "mx-20", //mobile
          "sm:px-0 sm:max-w-[60rem]", //small
          "md:max-w-[65rem] lg:max-w-[75rem]", //larger
        )}
      >
        <TsTypography
          color="base-100"
          class="text-6xl max-w-[24rem] sm:max-w-none sm:text-[5rem]"
        >
          {titlePrimary}{" "}
          <TsTypography color="accent-content" weight="600">
            {titleSecondary}
          </TsTypography>
        </TsTypography>
        <TsRichText class="text-base-100 font-body text-2xl">
          {description}
        </TsRichText>
        <TsCursoAccordion
          name="test"
          items={questions}
          containerClass="sm:w-[1171px]"
        />
        <div class="self-center">
          <TsActionButton
            url={ctaButton.url}
            class="text-2xl sm:text-xl lg:text-2xl"
          >
            {ctaButton.text}
          </TsActionButton>
        </div>
      </div>
    </div>
  );
};

export default TsCursoDominar;
