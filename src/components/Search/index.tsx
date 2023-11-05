import { FC } from "react";
import clsx from "clsx";
import { CiSearch } from "react-icons/ci";
import styles from "./index.module.css";

type SearchPorps = {
  className?: string;
};

const Search: FC<SearchPorps> = ({ className }) => {
  return (
    <label className={clsx(styles.label, className)}>
      <CiSearch size={24} />
      <input
        placeholder="Search any component"
        className={styles.input}
        disabled={true}
      />
    </label>
  );
};

export { Search };
