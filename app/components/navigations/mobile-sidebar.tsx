import { Menu, XIcon } from "lucide-react";
import { sva } from "styled-system/css";
import * as Drawer from "~/components/core/drawer";
import { IconButton } from "~/components/core/icon-button";
import SidebarList from "./sidebar-list";
import sidebarList from "~/consts/sidebar-list";
import useUiStore from "~/stores/ui-store";
import type { OpenChangeDetails } from "@zag-js/dialog";


const styles = sva({
  slots: ["menu-toggle"],
  base: {
    "menu-toggle": {
      lg: {
        display: "none",
      },
    },
  },
})();

const MobileSidebar = () => {
  const uiStore = useUiStore();

  const onOpenChange = (detail: OpenChangeDetails) => {
    uiStore.toggleMobileSidebar(detail.open)
  }

  return (
    <Drawer.Root variant="right" open={uiStore.ui.openMobileSidebar} onOpenChange={onOpenChange}>
      <Drawer.Trigger asChild>
        <IconButton variant="ghost" className={styles["menu-toggle"]}>
          <Menu />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Body>
            <SidebarList list={sidebarList} isMobile />
          </Drawer.Body>

          <Drawer.Footer justifyContent="flex-start">
            <Drawer.CloseTrigger asChild>
              <IconButton variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
};

export default MobileSidebar;
