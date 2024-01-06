import { Menu } from "lucide-react";

import SidebarList from "~/components/navigations/sidebar-list";
import { sva } from "styled-system/css";
import { IconButton } from "~/components/core/icon-button";
import useUiStore from "~/stores/ui-store";
import sidebarList from "~/consts/sidebar-list";

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
