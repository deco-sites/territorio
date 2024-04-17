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
        "text-center md:text-left md:w-1/4 flex flex-col gap-1",
        className,
      )}
    >
      <TsTypography
        class="text-[#28FF64] text-xl md:text-3xl"
        weight="600"
        type="body"
      >
        {content.title}
      </TsTypography>
      <TsTypography class="text-white text-sm md:text-base" type="body">
        {content.content}
      </TsTypography>
    </div>
  );
}
