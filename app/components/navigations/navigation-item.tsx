import { NavLink, type NavLinkProps } from "@remix-run/react";
import { type LucideIcon } from "lucide-react";
import { css } from "styled-system/css";
import { Button } from "~/components/core/button";
import useUiStore from "~/stores/ui-store";
import { IconButton } from "~/components/core/icon-button";
import delay from "~/helpers/delay";
import QuickTooltip from "~/components/core/quick-tooltip";

export interface NavigationItemProps extends Omit<NavLinkProps, "children"> {
  label: string;
  icon: LucideIcon;
  isMobile?: boolean;
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  icon: Icon,
  isMobile = false,
  ...props
}) => {
  const uiStore = useUiStore();

  const handleClickLink = async () => {
    await delay(300);

    uiStore.toggleMobileSidebar(false);
  };

  return (
    <NavLink {...props} onClick={handleClickLink}>
      {({ isActive }) => {
        if (!uiStore.ui.expandSidebar && !isMobile) {
          return (
            <QuickTooltip content={label}>
              <IconButton variant={isActive ? "solid" : "ghost"}>
                <Icon />
              </IconButton>
            </QuickTooltip>
          );
        }

        return (
          <Button
            className={css({ width: "100%", justifyContent: "left" })}
            variant={isActive ? "solid" : "ghost"}
          >
            <Icon /> {label}
          </Button>
        );
      }}
    </NavLink>
  );
};

export default NavigationItem;
