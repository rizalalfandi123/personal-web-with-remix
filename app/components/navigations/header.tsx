import { Menu, Sun } from "lucide-react";
import { css, sva } from "styled-system/css";
import { IconButton } from "~/components/core/icon-button";
import useUiStore from "~/stores/ui-store";
import MobileSidebar from "~/components/navigations/mobile-sidebar";

const styles = sva({
  slots: ["container"],
  base: {
    container: {
      width: "full",
      height: "full",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
})();

const Header: React.FunctionComponent<React.ComponentProps<"header">> = (
  props
) => {
  const uiStore = useUiStore();
  return (
    <header {...props}>
      <div className={styles.container}>
        <div>
          <MobileSidebar />
        </div>
        <IconButton variant="ghost" onClick={uiStore.toggleDarkMode}>
          <Sun />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
