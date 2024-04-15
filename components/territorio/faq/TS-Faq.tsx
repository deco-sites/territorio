import TsLink from "deco-sites/territorio/components/territorio/link/TS-Link.tsx"
import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx"
import Accordion from "./TS-Accordion.tsx"

/** @title {{{title}}} */
export interface Question {
  title: string
  /** @format textarea */
  description: string
}

export interface CtaSupport {
  text: string
  /** @title Link Part */
  /** @description The part of the text that will be converted to link. E.g. text is "Click here to redirect to support", we want the link part to be "Click here"  */
  ctaPart: string
  /** @format url */
  href: string
}

export interface Props {
  questions: Question[]
  title?: string
  /** @title Support description details */
  ctaSupportDescription?: CtaSupport
}

export default function TSFaq({
  questions,
  title = "Perguntas frequentes",
  ctaSupportDescription = {
    text: "Continua com dúvidas? Clique aqui e acesse nossa página de suporte.",
    ctaPart: "Suporte",
    href: "/support",
  },
}: Props) {
  const titleWords = title.split(" ")
  const ctaParts = ctaSupportDescription.text.split(
    ctaSupportDescription.ctaPart
  )
  return (
    <div className="ts-section">
      <TsTypography as="p" class="text-3xl md:text-6xl mb-8 md:mb-20">
        {titleWords.map((word, index) => {
          const isLast = index === titleWords.length - 1
          return (
            <>
              <span className={isLast ? "font-bold" : "font-normal"}>
                {word}
              </span>
              {!isLast && <br />}
            </>
          )
        })}
      </TsTypography>
      {!!questions?.length && (
        <Accordion name="faqAccordion">
          {questions.map(({ title, description }) => ({
            title,
            subtitle: description,
          }))}
        </Accordion>
      )}
      <TsTypography
        as="p"
        class="text-center text-xl md:text-3xl mt-14 mb-14 md:mt-32 md:mb-36"
      >
        {ctaParts[0]}{" "}
        <TsLink
          to={ctaSupportDescription.href}
          openOnNewTab
          class="underline text-[#BA7DFE]"
        >
          {ctaSupportDescription.ctaPart}
        </TsLink>{" "}
        {ctaParts[1]}
      </TsTypography>
    </div>
  )
}
