import React, { PropsWithChildren, FC } from "react";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { LuArrowDownUp } from "react-icons/lu";
import clsx from "clsx";
import { Search } from "../Search";
import { librarys } from "./index.mock";
import styles from "./index.module.css";

type LibraryProps = PropsWithChildren & {
  src?: any;
};

const Filters = () => {
  return (
    <div className={styles.wrapperFilter}>
      <button className={clsx(styles.buttonFilter, styles.selectFilter)}>
        <FiFilter />
        Filter (3)
      </button>
      <span className={styles.middleLine}></span>
      <button className={styles.buttonFilter}>
        <LuArrowDownUp />
        Sortings
      </button>
    </div>
  );
};

const Library: FC<LibraryProps> = ({ children, src }) => {
  return (
    <div className={styles.wrapperLibrary}>
      <img src={src} className={styles.imageLibrary} alt={"library"} />
      <span className={styles.subtitle}>{children}</span>
    </div>
  );
};

const LibraryCreate = () => {
  return (
    <div className={styles.wrapperLibraryCreate}>
      <div className={styles.libraryCreate}>
        <p className={styles.createComponentText}>
          Create a new <br /> component
        </p>
        <Link to={"/create-page"} className={styles.button}>
          Create
        </Link>
      </div>
    </div>
  );
};

const ComponentsLibrary = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Components Library</h1>
      <div className={styles.wrapperSearch}>
        <Search className={styles.search} />
        <Filters />
      </div>
      <div className={styles.containerLibrary}>
        <LibraryCreate />
        {librarys.map((library) => (
          <Library key={library.id}>{library.name}</Library>
        ))}
      </div>
    </section>
  );
};

export { ComponentsLibrary };
