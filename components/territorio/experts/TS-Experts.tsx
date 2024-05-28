import Image from "apps/website/components/Image.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import { useState } from "preact/hooks";
import { AppContext } from "../../../apps/site.ts";
import Icon from "../../../components/ui/Icon.tsx";
import TsRichText from "../rich-text/TS-Rich-Text.tsx";
import TsExpertCarousel from "./TS-Expert-Carousel.tsx";
import type { BasicImage, Expert } from "./types.ts";

export interface ExpertProps {
  titlePrimary: string;
  titleSecondary: string;
  leftDecorator: BasicImage;
  rightDecorator: BasicImage;
  experts: Expert[];
}

const TsExperts = ({
  titlePrimary,
  titleSecondary,
  leftDecorator,
  rightDecorator,
  experts,
}: ExpertProps) => {
  const [expertId, setExpertId] = useState(0);
  const { image, description, fullName, social } = experts[expertId];
  const names = fullName.split(" ");
  const lastName = names.pop();
  const firstName = names.join(" ");

  return (
    <div
      id="experts"
      class="flex justify-center ts-responsive overflow-x-hidden"
    >
      <div class="flex flex-col w-full max-w-[75rem] my-10 md:my-32 pl-[44px] pr-[32px] md:px-8 lg:px-0">
        <div class="flex gap-x-3 justify-center items-center">
          <Image
            src={leftDecorator.src}
            alt={leftDecorator.alt}
            width={160}
            height={160}
            class="md:hidden w-[5rem] sm:w-[7.5rem] h-[5rem] sm:h-[7.5rem]"
          />
          <TsTypography
            color="base-300"
            weight="200"
            class="text-5xl sm:text-7xl md:text-8xl max-w-[12rem] sm:max-w-[22.5rem]"
          >
            {titlePrimary}{" "}
            <TsTypography weight="600">{titleSecondary}</TsTypography>
          </TsTypography>
        </div>
        <div class="flex sm:w-full xl:w-auto gap-x-8 my-8 md:my-14">
          <div class="flex bg-base-300 w-full h-[248px] sm:h-[28rem] md:h-[25rem] xl:w-[85.625rem] md:ml-24 rounded-b-[10px] rounded-l-[10px]">
            <Image
              src={leftDecorator.src}
              alt={leftDecorator.alt}
              width={160}
              height={160}
              class="hidden md:inline-block absolute w-[10rem] h-[10rem] -ml-[6rem] -mt-[10rem]"
            />
            <Image
              src={image.src}
              alt={image.alt}
              width={423}
              height={502}
              class="self-end -ml-[90px] w-[201px] h-[239px] sm:w-[26.4375rem] sm:-ml-[5.625rem] sm:h-[31.375rem]"
            />
            <div class="flex flex-col md:flex-row w-full mt-[18px] sm:mt-12 ml-[8px] mr-[12px] sm:mx-8">
              <div class="flex flex-col gap-y-[8px] sm:gap-y-7 md:max-w-[85%]">
                <TsTypography
                  class="text-[22px] leading-tight sm:text-5xl w-[6.25rem] sm:w-auto"
                  weight="400"
                >
                  {firstName}{" "}
                  <TsTypography weight="600">{lastName}</TsTypography>
                </TsTypography>
                <div
                  id="scroll"
                  class="flex flex-col gap-y-3 overflow-y-auto max-h-[122px] sm:max-h-[15rem]"
                >
                  {description.map(({ text }) => (
                    <TsRichText
                      key={text}
                      class="font-body max-w-[92%] text-[11px] leading-tight sm:text-xl break-normal"
                    >
                      {text}
                    </TsRichText>
                  ))}
                </div>
              </div>
              <ul class="flex md:flex-col gap-4 md:ml-2 my-[12px] md:my-0">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} Logo`}
                    >
                      <Icon
                        class="text-black w-[2.25rem] h-[2.25rem]"
                        id={item.label}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Image
            src={rightDecorator.src}
            alt={rightDecorator.alt}
            width={68}
            height={68}
            class="hidden md:block h-[4.25rem]"
          />
        </div>
        <TsExpertCarousel experts={experts} updateExpertId={setExpertId} />
      </div>
    </div>
  );
};

export const loader = (props: ExpertProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsExperts;
