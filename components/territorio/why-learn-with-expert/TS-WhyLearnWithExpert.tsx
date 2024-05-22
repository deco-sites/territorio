import Image from "apps/website/components/Image.tsx";
import TSAccordion from "deco-sites/territorio/components/territorio/faq/TS-Accordion.tsx";
import { ImageType } from "deco-sites/territorio/components/territorio/types.ts";
import TsActionButton, {
  CTAButton,
} from "../action-button/Ts-Action-Button.tsx";
import TsTypography from "../typography/TS-Typography.tsx";
import { AppContext } from "../../../apps/site.ts";
import useTsIsMobile from "deco-sites/territorio/hooks/useTsIsMobile.tsx";

/** @title Statistic: {{value}} */
export interface StatisticProps {
  value: string;
  description: string;
}

const Statistic = ({ value, description }: StatisticProps) => (
  <div class="text-center flex flex-col items-center">
    <TsTypography class="text-9xl" weight="700">
      {value}
    </TsTypography>
    <TsTypography type="body" class="text-2xl">
      {description}
    </TsTypography>
  </div>
);

export interface Paragraph {
  /** @format html */
  content: string;
}

export interface WhyProps {
  title: {
    primary: string;
    secondary: string;
  };
  img: ImageType;
  expertName: string;
  /** @format html */
  expertBio: string;
  additionalInfo?: Paragraph[];
  /** @minItems 4 */
  /** @maxItems 4 */
  statistics: StatisticProps[];
  ctaButton: CTAButton;
}

const TsWhyLearnWithExpert = ({
  ctaButton,
  title: { primary, secondary },
  statistics,
  expertBio,
  expertName,
  additionalInfo,
  img,
}: WhyProps) => {
  const isMobile = useTsIsMobile();

  const ExpertMainInfo = (
    <div class="flex flex-col gap-5">
      <TsTypography
        as="h3"
        class="text-7xl block uppercase"
        color="accent-content"
        weight="700"
      >
        {expertName}
      </TsTypography>
      <div
        class="font-body text-2xl"
        dangerouslySetInnerHTML={{ __html: expertBio }}
      >
      </div>
    </div>
  );

  const ExpertAdditionalInfo = (
    <div class="flex flex-col">
      {additionalInfo?.map(({ content }) => (
        <div
          class="border-l border-accent-content pl-4 my-4 font-body text-2xl"
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
      ))}
    </div>
  );

  return (
    <div class="ts-section flex flex-col gap-[4.4rem] sm:gap-16 my-16">
      <TsTypography type="title" class="text-[3.3rem] sm:text-8xl sm:w-[90%]">
        {primary}{" "}
        <TsTypography color="accent-content">{secondary}</TsTypography>
      </TsTypography>

      <div class="flex flex-col gap-[1.875rem] sm:gap-16">
        <div class="grid grid-cols-2 sm:grid-cols-4 grid-flow-row gap-y-8 sm:gap-y-20 gap-x-4 sm:gap-x-0">
          <Statistic {...statistics[0]} />
          <div class="col-span-2 row-span-2 row-start-3 sm:row-start-1 sm:col-start-2">
            <Image {...img} class="w-full" />
          </div>
          {isMobile
            ? <Statistic {...statistics[2]} />
            : <Statistic {...statistics[1]} />}
          {isMobile
            ? <Statistic {...statistics[1]} />
            : <Statistic {...statistics[2]} />}
          <Statistic {...statistics[3]} />
        </div>

        <div class="hidden sm:flex gap-10">
          {ExpertMainInfo}

          {ExpertAdditionalInfo}
        </div>
        <div class="sm:hidden">
          <TSAccordion
            radio={false}
            defaultCheckedFirst={false}
            name="expert-info"
            icon={{
              collapse: "Less",
              expand: "More",
            }}
            iconPosition="bottom"
          >
            {[
              {
                title: ExpertMainInfo,
                subtitle: ExpertAdditionalInfo,
                withBorder: false,
              },
            ]}
          </TSAccordion>
        </div>
      </div>

      <TsActionButton
        url={ctaButton.url}
        linkContainerClass="block mx-auto"
        class="text-2xl w-full sm:w-auto sm:text-xl lg:text-2xl"
      >
        {ctaButton.text}
      </TsActionButton>
    </div>
  );
};

export const loader = (props: WhyProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsWhyLearnWithExpert;
