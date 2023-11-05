import React from "react";
import { Outlet } from "react-router-dom";
import { FC, PropsWithChildren } from "react";
import { SidebarComponent, LeftBar, Header } from "../../components";
import styles from "./index.module.css";
import { Popup } from "../../components/Popup";

type LayoutRootProps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootProps> = () => {
  return (
    <main className={styles.wrapper}>
      <Popup />
      <LeftBar />
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
      <SidebarComponent />
    </main>
  );
};

export { LayoutRoot };
