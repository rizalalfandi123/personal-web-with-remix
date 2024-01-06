import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesHref from "~/assets/app.css";
import { sva } from "styled-system/css";
import DefaultLayout from "~/components/layout/DefaultLayout";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesHref },
];

const styles = sva({
  slots: ["container", "sidebar", "content"],
  base: {
    container: { width: "100dvw", height: "100dvh", display: "flex" },
    sidebar: { flexShrink: 0, width: "240px", padding: "16px 8px" },
    content: { flexGrow: 1 },
  },
})();

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
