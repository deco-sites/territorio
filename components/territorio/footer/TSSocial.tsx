import Icon from "../../../components/ui/Icon.tsx";

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

export default function TSSocial({
  content,
}: {
  content?: { title?: string; items?: SocialItem[] };
}) {
  return (
    <>
      {content && content.items && content.items.length > 0 && (
        <div class="flex flex-col gap-6">
          {content.title && (
            <h3 class="font-semibold text-2xl">{content.title}</h3>
          )}
          <ul class="flex gap-6 flex-col items-start text-xl">
            {content.items.map((item) => {
              return (
                <li>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} Logo`}
                    class="flex gap-2 items-center hover:underline"
                  >
                    <span class="md:hidden">
                      <Icon size={10} id={item.label} />
                    </span>
                    <span class="hidden md:inline">
                      <Icon size={24} id={item.label} />
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
