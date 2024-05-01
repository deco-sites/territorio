import { HTMLWidget } from "apps/admin/widgets.ts";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import TsActionButton, {
  CTAButton,
} from "../../action-button/Ts-Action-Button.tsx";
import TsTypography from "../../typography/TS-Typography.tsx";

export interface TsCursoDominarProps {
  titlePrimary: string;
  titleSecondary: string;
  description: HTMLWidget;
  ctaButton: CTAButton;
}

const TsCursoDominar = ({
  ctaButton,
  description,
  titlePrimary,
  titleSecondary,
}: TsCursoDominarProps) => {
  return (
    <div class="flex justify-center ts-responsive">
      <div
        class={clx(
          "flex flex-col my-[7%] gap-y-16 w-screen", //common
          "px-20", //mobile
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
        <div class="w-[1171px]"></div>
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
