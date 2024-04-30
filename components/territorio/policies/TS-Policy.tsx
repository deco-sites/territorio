export interface Props {
  /** @format html */
  content: string;
}

export default function TSPolicy({ content }: Props) {
  return (
    <div class="ts-policy-page">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
