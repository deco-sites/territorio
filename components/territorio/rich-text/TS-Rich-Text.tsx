import type { HTMLWidget } from "apps/admin/widgets.ts";
import type { JSX } from "preact";

export interface RichTextProps {
  children: HTMLWidget;
  class?: string | JSX.SignalLike<string | undefined>;
}

const TsRichText = ({ children, class: _class = "" }: RichTextProps) => {
  return (
    <span dangerouslySetInnerHTML={{ __html: children }} class={_class}></span>
  );
};

export default TsRichText;
