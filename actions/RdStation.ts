import { AppContext } from "../apps/site.ts";

export interface Props {
  email: string;
}

const url = "https://api.rd.services/platform/conversions";

export default async function RdStationLoader(
  props: Props,
  _req: Request,
  ctx: AppContext,
): Promise<void> {
  const { email } = props;
  const { rdStationToken } = ctx;

  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "Newsletter Home",
        email,
      },
    }),
  };

  const urlWithToken = `${url}?api_key=${rdStationToken.get()}`;
  const response = await fetch(urlWithToken, options);
  const result = await response.json();

  if (!result.event_uuid) {
    console.error("RDStation registration error:", result);
    throw new Error("Failed to create RdStation event");
  }
}
