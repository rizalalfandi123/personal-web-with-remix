import { stack } from "styled-system/patterns";
import NavigationItem, {
  NavigationItemProps,
} from "~/components/navigations/navigation-item";

const SidebarList: React.FunctionComponent<{
  list: Array<NavigationItemProps>;
}> = ({ list }) => {
  return (
    <ul>
      <li className={stack({ gap: "2" })}>
        {list.map((item) => {
          return <NavigationItem {...item} key={item.label} />;
        })}
      </li>
    </ul>
  );
};

export default SidebarList;
