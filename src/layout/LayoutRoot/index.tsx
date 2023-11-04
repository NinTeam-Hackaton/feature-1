import { FC, PropsWithChildren } from "react";
import styles from "./index.module.css";

type LayoutRootPorps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootPorps> = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export { LayoutRoot };
