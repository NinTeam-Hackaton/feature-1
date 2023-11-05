import React from "react";
import { FC, PropsWithChildren } from "react";
import { SidebarComponent } from "../../components";
import styles from "./index.module.css";

type LayoutRootProps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootProps> = ({ children }) => {
  return (
    <>
      <SidebarComponent />
    </>
  );
};

export { LayoutRoot };
