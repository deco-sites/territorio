import Image from "apps/website/components/Image.tsx";
import TsActionButton, {
  CTAButton,
} from "deco-sites/territorio/components/territorio/action-button/Ts-Action-Button.tsx";
import { ImageType } from "deco-sites/territorio/components/territorio/types.ts";
import TsTypography from "../typography/TS-Typography.tsx";

/** @title {{title}} */
export interface CardProps {
  img: ImageType;
  title: string;
  description: string;
}

const WhiteMainCard = ({ description, img, title }: CardProps) => {
  return (
    <div class="rounded-2xl bg-white text-neutral w-full sm:aspect-[5/3] border border-accent-content p-6 sm:p-10 flex flex-col justify-center items-center sm:gap-4 text-center">
      <Image {...img} class="mt-auto" />
      <TsTypography class="text-[1.5rem] sm:text-4xl mt-4" type="title">
        {title}
      </TsTypography>
      <TsTypography class="text-[1.3rem] sm:text-2xl" type="body" weight="300">
        {description}
      </TsTypography>
    </div>
  );
};

const SecondaryCard = ({ description, img, title }: CardProps) => {
  return (
    <div class="border border-accent-content rounded-xl py-8 px-1 flex flex-col items-center text-center">
      <Image {...img} />
      <TsTypography
        class="text-[1.5rem] sm:text-[1.68rem] mt-4"
        color="accent-content"
        type="title"
      >
        {title}
      </TsTypography>
      <TsTypography class="text-[1.3rem] sm:text-2xl" type="body" weight="300">
        {description}
      </TsTypography>
    </div>
  );
};

export interface Props {
  title: {
    primary: string;
    secondary: string;
  };
  /** @minItems 2 */
  /** @maxItems 2 */
  mainContent: CardProps[];
  /** @minItems 4 */
  /** @maxItems 4 */
  secondaryContent: CardProps[];
  ctaButton: CTAButton;
}

export default function TsCourseAccess({
  ctaButton,
  mainContent,
  secondaryContent,
  title: { primary, secondary },
}: Props) {
  return (
    <div class="ts-section flex flex-col gap-[4.4rem] sm:gap-16 my-16">
      <TsTypography type="title" class="text-6xl sm:text-8xl">
        {primary}
        <br />
        <TsTypography color="accent-content">{secondary}</TsTypography>
      </TsTypography>

      <div class="flex flex-col gap-[1.875rem] sm:gap-16">
        <div class="flex gap-[1.875rem] sm:gap-16">
          <WhiteMainCard {...mainContent[0]} />
          <WhiteMainCard {...mainContent[1]} />
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-[1.875rem] grid-flow-row">
          <SecondaryCard {...secondaryContent[0]} />
          <SecondaryCard {...secondaryContent[1]} />
          <SecondaryCard {...secondaryContent[2]} />
          <SecondaryCard {...secondaryContent[3]} />
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
}
