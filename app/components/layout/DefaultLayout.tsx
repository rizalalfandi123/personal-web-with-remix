import { sva } from "styled-system/css";
import Sidebar from "~/components/navigations/sidebar";
import useUiStore from "~/stores/ui-store";
import Header from "../navigations/header";

const styles = sva({
  slots: ["container", "sidebar", "main", "header"],
  base: {
    container: {
      width: "100dvw",
      height: "100dvh",
      display: "flex",
      fontFamily: '"Inter", sans',
      WebkitTapHighlightColor: 'transparent'
    },
    sidebar: {
      display: 'none',
      flexShrink: 0,
      width: "260px",
      padding: "16px 8px",
      transition: "width",
      transitionDuration: "normal",
      transitionTimingFunction: "linear",
      "&[data-expand-sidebar=false]": {
        width: "56px",
        "& #brand": {
          paddingX: 0,
        },
        "& #brand-name": {
          display: "none",
        },
      },

      lg: {
        display: 'block'
      }
    },
    main: { flexGrow: 1, height: "100%", paddingX: "8px" },
    header: {
      height: "14",
      position: "sticky",
      top: "0",
      zIndex: "sticky",
    },
  },
})();

const DefaultLayout: React.FunctionComponent<React.ComponentProps<"div">> = ({
  children,
  ...props
}) => {
  const uiStore = useUiStore();

  return (
    <div className={styles.container} {...props}>
      <Sidebar
        className={styles.sidebar}
        data-expand-sidebar={uiStore.ui.expandSidebar}
      />

      <main className={styles.main}>
        <Header className={styles.header} />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default DefaultLayout;
