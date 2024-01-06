import { stack } from "styled-system/patterns";
import NavigationItem, {
  NavigationItemProps,
} from "~/components/navigations/navigation-item";

const SidebarList: React.FunctionComponent<{
  list: Array<NavigationItemProps>;
  isMobile?: boolean
}> = ({ list, isMobile = false }) => {
  return (
    <ul>
      <li className={stack({ gap: "2" })}>
        {list.map((item) => {
          return <NavigationItem isMobile={isMobile} {...item} key={item.label} />;
        })}
      </li>
    </ul>
  );
};

export default SidebarList;
