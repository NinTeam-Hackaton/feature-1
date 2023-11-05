import { FC, PropsWithChildren } from "react";
import styles from "./index.module.css";

type LayoutRootProps = PropsWithChildren & {};

const LayoutRoot: FC<LayoutRootProps> = ({ children }) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export { LayoutRoot };
