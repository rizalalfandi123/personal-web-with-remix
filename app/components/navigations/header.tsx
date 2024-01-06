import { Sun } from "lucide-react";
import { css } from "styled-system/css";
import { IconButton } from "~/components/core/icon-button";
import useUiStore from "~/stores/ui-store";

const Header: React.FunctionComponent<React.ComponentProps<"header">> = (
  props
) => {
  const uiStore = useUiStore();
  return (
    <header {...props}>
      <div
        className={css({
          width: "full",
          height: "full",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <div></div>
        <IconButton variant="ghost" onClick={uiStore.toggleDarkMode}>
          <Sun />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
