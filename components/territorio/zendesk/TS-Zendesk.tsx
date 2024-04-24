export interface Props {
  zendeskKey: string;
}

export default function TsZendesk({ zendeskKey }: Props) {
  return (
    <script
      async
      id="ze-snippet"
      src={`https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`}
    >
      {" "}
    </script>
  );
}
