import TsTypography from "deco-sites/territorio/components/territorio/typography/TS-Typography.tsx";
import { clx } from "deco-sites/territorio/sdk/clx.ts";
import type { Section } from "./types.ts";

interface Props {
  class?: string;
  content: Section;
}

export default function TsPlatformCardContent({
  class: className,
  content,
}: Props) {
  return (
    <div
      class={clx(
        "text-center md:text-left md:w-1/4 flex flex-col items-center gap-4",
        className,
      )}
    >
      <TsTypography
        class="text-secondary-content text-4xl w-[70%]"
        weight="600"
        type="body"
      >
        {content.title}
      </TsTypography>
      <TsTypography
        class="text-white text-3xl md:text-base w-[85%] md:w-auto"
        type="body"
      >
        {content.content}
      </TsTypography>
    </div>
  );
}
