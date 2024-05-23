import type { SiteNavigationElementLeaf } from "apps/commerce/types.ts";
import TsLink from "../link/TS-Link.tsx";

function TsNavItem({ item }: { item: SiteNavigationElementLeaf }) {
  const { url, name } = item;

  return (
    <li class="group items-center text-center" hidden={name === "Blog"}>
      <TsLink
        to={url || "/"}
        type="body"
        color="base-100"
        weight="500"
        class="text-[16px] xl:text-[20px] hover:underline"
      >
        {name as string}
      </TsLink>
    </li>
  );
}

export default TsNavItem;
