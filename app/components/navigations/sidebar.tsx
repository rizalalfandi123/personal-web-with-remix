import { FileText, Menu, Newspaper, Phone, User } from "lucide-react";

import SidebarList from "~/components/navigations/sidebar-list";
import { type NavigationItemProps } from "~/components/navigations/navigation-item";
import { sva } from "styled-system/css";
import { IconButton } from "~/components/core/icon-button";
import useUiStore from "~/stores/ui-store";

const sidebarList: Array<NavigationItemProps> = [
  { icon: User, label: "About Me", to: "/" },
  { icon: Newspaper, label: "Blog", to: "/blog" },
  { icon: FileText, label: "Cerificates", to: "/certificates" },
  { icon: Phone, label: "Contacts", to: "/contacts" },
];

const styles = sva({
  slots: ["brand", "brand-name"],
  base: {
    "brand-name": {
      fontSize: "2xl",
      fontWeight: 600,
      letterSpacing: "wide",
      whiteSpace: "nowrap",
    },
    brand: {
      paddingX: "8px",
      marginBottom: "4",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
})();

const Sidebar: React.FunctionComponent<React.ComponentProps<"nav">> = (
  props
) => {
  const uiStore = useUiStore();

  return (
    <nav {...props}>
      <div id="brand" className={styles.brand}>
        <h1 id="brand-name" className={styles["brand-name"]}>
          Rizal Alfandi
        </h1>

        <IconButton variant="ghost" onClick={uiStore.toggleExpandSidebar}>
          <Menu />
        </IconButton>
      </div>
      <SidebarList list={sidebarList} />
    </nav>
  );
};

export default Sidebar;
