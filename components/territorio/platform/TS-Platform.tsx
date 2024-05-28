import TsPlatformDesktopContent from "deco-sites/territorio/components/territorio/platform/TS-PlatformDesktopContent.tsx";
import TsPlatformMobileContent from "deco-sites/territorio/components/territorio/platform/TS-PlatformMobileContent.tsx";
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";

import type { ContentProps, SectionTitle } from "./types.ts";

export interface Props extends ContentProps {
  /** @title Section title */
  title: SectionTitle;
}

export default function TsPlatform({
  title = {
    main: "Plataforma de estudo exclusiva",
    sub: "para você aprender e evoluir com mais facilidade.",
  },
  image,
  content = {
    section1: {
      title: "Flexível",
      content:
        "Oferece diversos recursos, como vídeos, podcast, e-books e outros, para se adaptar ao seu dia a dia e permitir um aprendizado ainda mais dinâmico e de qualidade.",
    },
    section2: {
      title: "Adaptável",
      content:
        "100% responsiva, garante uma experiência de aprendizado fluida em smartphone, tablet ou computador para você estudar onde e como quiser.",
    },
    section3: {
      title: "Colaborativa",
      content:
        "Fórum exclusivo para você esclarecer dúvidas e interagir diretamente com especialistas renomados. Tudo para contribuir ainda mais para seu aprendizado e networking. ",
    },
    section4: {
      title: "Intuitiva e potencializadora",
      content:
        "Desenvolvida para transformar a sua jornada de aprendizado, oferece interface intuitiva e recursos avançados para agilizar e potencializar seus estudos.",
    },
    section5: {
      title: "Videoaulas cinematográficas",
      content:
        "Pensada para os dias atuais, cada aula é roteirizada e produzida seguindo padrões de qualidade do cinema. O resultado é um alto nível de experiência visual e educacional.",
    },
  },
}: Props) {
  return (
    <div class="ts-section ts-responsive px-[10vw] sm:px-32 md:px-8 lg:px-0 mb-20">
      <div class="mb-10 md:mb-0 w-full text-center">
        <TsTypography class="text-5xl md:text-6xl text-secondary-content">
          {title.main} <TsTypography color="base-100">{title.sub}</TsTypography>
        </TsTypography>
      </div>
      <TsPlatformDesktopContent content={content} image={image} />
      <TsPlatformMobileContent content={content} image={image} />
    </div>
  );
}
