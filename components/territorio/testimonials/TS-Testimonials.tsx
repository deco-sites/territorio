import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import TsTestimonialsCarouselDesk from "../../../islands/territorio/TS-TestimonialsCarouselDesk.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TsTestimonialsCarouselMobile from "./TS-TestimonialsCarouselMobile.tsx";

/** @title {{{author}}} - testimonial */
interface Testimonial {
  /** @title Image */
  image: ImageWidget;
  /** @title Testimonial */
  content: string;
  /** @title Author */
  author: string;
}

interface SectionTitle {
  /** @title Main title */
  main: string;
  /** @title Subtitle */
  sub: string;
}

export interface Props {
  /** @title Section title */
  title: SectionTitle;
  /** @title Testimonials */
  items: Testimonial[];
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
}: Props) {
  const items = itemsProp.map((item) => (
    <div class="flex flex-col md:flex-row justify-center text-black">
      <Image
        class="w-2/3 md:w-full h-1/2 md:h-[400px] object-cover z-20 md:z-0 overflow-hidden rounded-lg rounded-tl-none"
        src={item.image}
        width={351}
        height={351}
      />

      <div class="md:w-full flex flex-col gap-3 md:gap-10 bg-white z-10 overflow-hidden rounded-lg rounded-tl-none p-6 md:p-10 pt-[25%] md:pt-10 -mt-[20%] md:mt-[30%] ml-10 md:-ml-10">
        <TsTypography class="text-sm md:text-2xl" type="body">
          {item.content}
        </TsTypography>
        <TsTypography class="text-sm md:text-xl" weight="600">
          {item.author}
        </TsTypography>
      </div>
    </div>
  ));

  return (
    <div class="ts-section px-0 md:px-8 mb-10">
      <div class="inline-block md:flex md:flex-col md:text-center px-8 mb-10 md:mb-0">
        <TsTypography class="text-3xl md:text-6xl text-[#FFD200]" type="title">
          {title.main}
          {" "}
        </TsTypography>
        <TsTypography class="text-3xl md:text-6xl" type="title">
          {title.sub}
        </TsTypography>
      </div>
      <div class="hidden md:block">
        <TsTestimonialsCarouselDesk>{items}</TsTestimonialsCarouselDesk>
      </div>
      <div class="md:hidden">
        <TsTestimonialsCarouselMobile>{items}</TsTestimonialsCarouselMobile>
      </div>
    </div>
  );
}