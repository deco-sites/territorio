import { clx } from "deco-sites/territorio/sdk/clx.ts";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export default function TSFooterItems({
  sections,
  justify = false,
}: {
  sections: Section[];
  justify: boolean;
}) {
  return (
    <>
      {sections.length > 0 && (
        <ul class={clx(`flex flex-row gap-6`, justify && "lg:justify-between")}>
          {sections.map((section) => (
            <li>
              <div class="flex flex-col gap-2">
                <h3 class="font-medium text-sm md:text-2xl">{section.label}</h3>
                <ul class={`flex flex-col gap-2 flex-wrap text-xs md:text-xl`}>
                  {section.items?.map((item) => (
                    <li>
                      <a href={item.href} target="_blank" class="block link link-hover">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
