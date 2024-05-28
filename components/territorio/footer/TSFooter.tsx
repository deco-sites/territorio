import type { ImageWidget } from "apps/admin/widgets.ts";
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
    <footer class="flex flex-col ts-responsive w-full pb-10 sm:pb-44 gap-10 font-body">
      <div class="mx-auto ts-section px-[44px] md:px-8 lg:px-0">
        <hr class="mb-32 border-accent-content" />
        <div class="flex flex-row justify-between flex-wrap gap-8">
          <div class="hidden sm:block">
            <TSLogo
              logo={logo?.desktop}
              width={194}
              height={47}
              class="w-[12.125rem] h-[2.9375rem]"
            />
          </div>
          <TSFooterItems sections={sections} justify />
          <TSSocial content={social} />
        </div>
        <div class="sm:hidden flex justify-end mt-5">
          <TSLogo
            logo={logo?.mobile}
            width={37}
            height={30}
            class="w-[2.3125rem] h-[1.875rem]"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
