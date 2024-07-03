import TsActionButton, {
  CTAButton,
} from "../action-button/Ts-Action-Button.tsx";
import TsTypography from "../typography/TS-Typography.tsx";

export interface Props {
  /** @title Desabilitar offset superior */
  disableTopOffset?: boolean;
  title: {
    primary: string;
    secondary: string;
  };
  /** @format textarea */
  video?: string;
  /** @format html */
  content: string;
  ctaButton: CTAButton;
}

export default function TsVideo(
  { title, video, content, ctaButton, disableTopOffset }: Props,
) {
  return (
    <div
      class={`ts-section ts-responsive py-4 sm:pb-[7%] ${
        !disableTopOffset && "sm:mt-[-6%]"
      } flex flex-col gap-[3.2rem] md:gap-8 bg-transparent`}
    >
      {!!video && (
        <div
          class="flex w-full aspect-video [&_iframe]:w-full [&_iframe]:h-full"
          dangerouslySetInnerHTML={{ __html: video }}
        >
        </div>
      )}
      <div class="flex flex-col sm:flex-row gap-10 md:mt-10 px-4 py-6 sm:backdrop-blur-2xl sm:bg-white sm:bg-opacity-[0.02] sm:rounded-2xl">
        <TsTypography
          class="w-full text-[2.6rem] md:text-[3.375rem] leading-[1.1]"
          weight="500"
          type="title"
          as="h2"
        >
          {title.primary}{" "}
          <TsTypography color="secondary-content" weight="700" type="title">
            {title.secondary}
          </TsTypography>
        </TsTypography>
        <div
          class="w-full font-body leading-[1.3] md:leading-normal text-[1.6rem] md:text-2xl font-normal [&_strong]:font-bold max-h-[31.4rem] overflow-y-auto md:max-h-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <TsActionButton
        url={ctaButton.url}
        linkContainerClass="block mx-auto my-8 md:my-12"
        class="text-2xl w-full sm:w-auto sm:text-xl lg:text-2xl"
      >
        {ctaButton.text}
      </TsActionButton>
    </div>
  );
}
