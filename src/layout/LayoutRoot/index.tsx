import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import {
  SidebarComponent,
  LeftBar,
  Header,
  Editor,
  HeaderMarkdown,
} from "../../components";
import styles from "./index.module.css";

type LayoutRootProps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootProps> = () => {
  const [element, setElement] = useState(null);
  const location = useLocation();
  const isCreatePage = location.pathname === "/edit-page";

  return (
    <main className={styles.wrapper}>
      <LeftBar />
      <div className={styles.container}>
        {isCreatePage ? <HeaderMarkdown /> : <Header />}
        <Outlet context={[element, setElement]} />
      </div>
      <SidebarComponent setElement={setElement} />
    </main>
  );
};

export { LayoutRoot };
