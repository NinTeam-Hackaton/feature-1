import React from "react";
import { FC, PropsWithChildren } from "react";
import { SidebarComponent, LeftBar } from "../../components";
import styles from "./index.module.css";

type LayoutRootProps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootProps> = () => {
  return (
    <main className={styles.wrapper}>
      <LeftBar />
      <SidebarComponent />
    </main>
  );
};

export { LayoutRoot };
