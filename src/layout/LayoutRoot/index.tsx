import React from "react";
import { FC, PropsWithChildren } from "react";
import { SidebarComponent } from "../../components";
import styles from "./index.module.css";

type LayoutRootPorps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootPorps> = ({ children }) => {
  return (
    <>
      <SidebarComponent />
    </>
  );
};

export { LayoutRoot };
