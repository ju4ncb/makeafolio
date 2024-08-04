export { Layout };

import React, { useState } from "react";
import logoUrl from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import type { PageContext } from "vike/types";
import "./css/index.css";
import "./Layout.css";
import Content from "../components/Content";

const pagesNoSidebar = ["auth", "register", "inicio"];

function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  let pageTitle: string;
  if (pageContext.data?.title !== undefined) {
    pageTitle = pageContext.data?.title;
  } else {
    pageTitle = "";
  }

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Frame>
          {!pagesNoSidebar.includes(pageTitle) && (
            <Sidebar>
              <Logo />
              <Link href="/dashboard">Tu inicio</Link>
              <Link href="/account">Cuenta</Link>
            </Sidebar>
          )}
          <Content>{children}</Content>
        </Frame>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="sidebar"
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        lineHeight: "1.8em",
        borderRight: "2px solid #eee",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
