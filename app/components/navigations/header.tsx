import { Menu, Moon, Sun } from "lucide-react";
import { css, sva } from "styled-system/css";
import { IconButton } from "~/components/core/icon-button";
import useUiStore from "~/stores/ui-store";
import MobileSidebar from "~/components/navigations/mobile-sidebar";
import React from "react";

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

  React.useEffect(() => {
    const root = document.documentElement;

    if (uiStore.ui.darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [uiStore.ui.darkMode]);

  return (
    <header {...props}>
      <div className={styles.container}>
        <div>
          <MobileSidebar />
        </div>
        <IconButton variant="ghost" onClick={uiStore.toggleDarkMode}>
          {uiStore.ui.darkMode ? <Sun /> : <Moon />}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
