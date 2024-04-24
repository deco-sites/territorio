import type { ImageWidget } from "apps/admin/widgets.ts";
import { clx } from "../../../sdk/clx.ts";
import TSFooterItems from "./TSFooterItems.tsx";
import TSLogo from "./TSLogo.tsx";
import TSSocial from "./TSSocial.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter"
    | "Youtube"
    | "WhatsApp";
  link: string;
}

export type Logo = {
  image: ImageWidget;
  description?: string;
};

export interface Props {
  logo?: {
    desktop?: Logo;
    mobile?: Logo;
  };
  sections?: Section[];
  social?: {
    title?: string;
    items: SocialItem[];
  };
}

function Footer({
  logo,
  sections = [
    {
      label: "Sobre",
      items: [
        {
          href: "/quem-somos",
          label: "Quem somos",
        },
        {
          href: "/termos-de-uso",
          label: "Termos de uso",
        },
        {
          href: "/trabalhe-conosco",
          label: "Trabalhe conosco",
        },
      ],
    },
  ],
  social = {
    title: "Redes sociais",
    items: [
      { label: "Instagram", link: "/" },
      { label: "Tiktok", link: "/" },
    ],
  },
}: Props) {
  return (
    <footer class={clx("w-full flex flex-col pb-10 md:pb-44 gap-10 font-body")}>
      <div class="mx-auto ts-section">
        <hr class="mx-4 md:mx-0 mb-10 md:mb-36 border-accent-content" />
        <div class="flex flex-row justify-around md:justify-between flex-wrap gap-8">
          <div class="hidden md:block">
            <TSLogo logo={logo?.desktop} width={194} height={47} />
          </div>
          <TSFooterItems sections={sections} justify />
          <TSSocial content={social} />
        </div>
        <div class="md:hidden flex justify-end mt-5">
          <TSLogo logo={logo?.mobile} width={37} height={30} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
