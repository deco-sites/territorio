import Image from "apps/website/components/Image.tsx";
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
      <Image {...img} class="mt-auto w-[150px] h-[100px]" />
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
      <Image {...img} class="sm:w-20 sm:h-20" />
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
}

export default function TsCourseAccess({
  mainContent,
  secondaryContent,
  title: { primary, secondary },
}: Props) {
  return (
    <div class="ts-section flex flex-col gap-[4.4rem] sm:gap-16 my-16 mb-0">
      <TsTypography type="title" class="text-6xl sm:text-8xl">
        {primary}
        <br />
        <TsTypography color="accent-content">{secondary}</TsTypography>
      </TsTypography>

      <div class="flex flex-col gap-[1.875rem] sm:gap-11">
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
    </div>
  );
}
