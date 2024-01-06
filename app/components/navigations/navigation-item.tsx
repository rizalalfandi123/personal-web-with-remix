import { NavLink, type NavLinkProps } from "@remix-run/react";
import { type LucideIcon } from "lucide-react";
import { css } from "styled-system/css";
import { Button } from "~/components/core/button";
import useUiStore from "~/stores/ui-store";
import { IconButton } from "~/components/core/icon-button";

export interface NavigationItemProps extends Omit<NavLinkProps, "children"> {
  label: string;
  icon: LucideIcon;
}

const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  label,
  icon: Icon,
  ...props
}) => {
  const uiStore = useUiStore();

  return (
    <NavLink {...props}>
      {({ isActive }) => {
        if (uiStore.ui.expandSidebar) {
          return (
            <Button
              className={css({ width: "100%", justifyContent: "left" })}
              variant={isActive ? "solid" : "ghost"}
            >
              <Icon /> {label}
            </Button>
          );
        }

        return (
          <IconButton variant={isActive ? "solid" : "ghost"}>
            <Icon />
          </IconButton>
        );
      }}
    </NavLink>
  );
};

export default NavigationItem;
