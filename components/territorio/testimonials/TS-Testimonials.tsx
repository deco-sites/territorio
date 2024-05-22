import type { HTMLWidget } from "apps/admin/widgets.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsActionButton, {
  CTAButton,
} from "deco-sites/territorio/components/territorio/action-button/Ts-Action-Button.tsx";
import TsRichText from "deco-sites/territorio/components/territorio/rich-text/TS-Rich-Text.tsx";
import TsTestimonialsCarouselDesk from "../../../islands/territorio/TS-TestimonialsCarouselDesk.tsx";
import TsTestimonialsCarouselMobile from "./TS-TestimonialsCarouselMobile.tsx";

/** @title {{{author}}} - testimonial */
interface Testimonial {
  /** @title Image */
  image: ImageWidget;
  /** @title Testimonial */
  content: HTMLWidget;
  /** @title Author */
  author: HTMLWidget;
}

interface SectionTitle {
  /** @title Main title */
  main: HTMLWidget;
  /** @title Subtitle */
  sub: HTMLWidget;
}

export interface Props {
  /** @title Section title */
  title: SectionTitle;
  /** @title Testimonials */
  items: Testimonial[];
  /** @title CTA Button */
  ctaButton?: CTAButton;
}

export default function TsTestimonials({
  title = {
    main: "Quem estudou, evoluiu.",
    sub: "E conquistou mais territórios!",
  },
  items: itemsProp = [
    {
      image: "https://picsum.photos/id/237/300/300",
      content:
        "Meu maior medo é ficar desatualizada sobre as práticas médicas. A Território Saber me surpreendeu, trazendo informações teóricas e práticas sobre Sepse que eu nem imaginava.",
      author: "Helena Silva - Médica.",
    },
    {
      image: "https://picsum.photos/id/238/300/300",
      content:
        "Meu maior medo é ficar desatualizada sobre as práticas médicas. A Território Saber me surpreendeu, trazendo informações teóricas e práticas sobre Sepse que eu nem imaginava.",
      author: "Jane Doe - Médica.",
    },
  ],
  ctaButton,
}: Props) {
  const items = itemsProp.map((item) => (
    <div class="flex flex-col md:flex-row justify-center text-black">
      <Image
        class="w-[25.625rem] h-[25.625rem] object-cover z-20 md:z-0 rounded-lg rounded-tl-none"
        src={item.image}
        width={351}
        height={351}
      />
      <div class="md:w-full flex flex-col gap-3 md:gap-10 bg-white z-10 rounded-lg rounded-tl-none py-10 px-12 md:p-10 pt-[25%] md:pt-10 -mt-[20%] md:mt-[30%] ml-20 md:-ml-10 max-w-[75%] sm:max-w-none">
        <TsRichText class="text-3xl md:text-2xl font-body">
          {item.content}
        </TsRichText>
        <TsRichText class="text-2xl md:text-xl font-body font-semibold">
          {item.author}
        </TsRichText>
      </div>
    </div>
  ));

  const hasButton = !!ctaButton;

  return (
    <div class="flex flex-col items-center ts-section ts-responsive md:px-8 py-[10%] sm:py-[7%] overflow-x-hidden">
      <div class="inline-block max-w-[85%] sm:max-w-none md:flex md:flex-col self-start md:self-auto md:text-center mb-10 md:mb-0">
        <TsRichText class="text-6xl mb-2">{title.main}</TsRichText>
        <TsRichText class="hidden md:block text-4xl">{title.sub}</TsRichText>
      </div>
      <div class="hidden md:block">
        <TsTestimonialsCarouselDesk>{items}</TsTestimonialsCarouselDesk>
      </div>
      <div class="md:hidden">
        <TsTestimonialsCarouselMobile>{items}</TsTestimonialsCarouselMobile>
      </div>
      {hasButton && (
        <TsActionButton
          url={ctaButton.url}
          class="text-2xl sm:text-xl lg:text-2xl mt-28"
        >
          {ctaButton.text}
        </TsActionButton>
      )}
    </div>
  );
}
