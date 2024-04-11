import type { SiteNavigationElementLeaf } from "apps/commerce/types.ts";
import TsLink from "../link/TS-Link.tsx";

function TsNavItem({ item }: { item: SiteNavigationElementLeaf }) {
  const { url, name } = item;

  return (
    <li class="group flex items-center text-center">
      <TsLink
        to={url || "/"}
        type="body"
        color="base-100"
        weight="500"
        customClass="text-[16px] xl:text-[20px]"
      >
        {name as string}
      </TsLink>
    </li>
  );
}

export default TsNavItem;
