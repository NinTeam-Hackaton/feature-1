import { FC, useState, PropsWithChildren } from "react";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { Search } from "../Search";
import { Tag } from "../Tag";
import { RadioButtonComponents } from "../RadioButtonComponents";
import { tags } from "./index.mock";
import styles from "./index.module.css";

type SidebarComponentProps = PropsWithChildren & {};

const SidebarComponent: FC<SidebarComponentProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen((currentOpen) => !currentOpen);
  };

  return (
    <div
      className={clsx(styles.wrapperSidebar, { [styles.sidebarOpen]: isOpen })}
    >
      <div className={styles.containerSidebar}>
        <div className={styles.wrraperContent}>
          <button onClick={toggleButton} className={styles.buttonToggle}>
            {isOpen ? (
              <FaChevronRight size={16} />
            ) : (
              <FaChevronLeft size={16} />
            )}
          </button>
          <p className={styles.upText}>
            Open Components Library <BsArrowRight />
          </p>
          <h3 className={styles.title}>Components</h3>
          <Search />
          <div className={styles.wrapperTags}>
            <button className={styles.resetAll}>Reset All</button>
            {tags.map((tag) => {
              return <Tag key={tag.id} tag={tag} />;
            })}
          </div>
          <RadioButtonComponents />
        </div>
        <button className={styles.buttonPaste}>Paste</button>
      </div>
    </div>
  );
};

export { SidebarComponent };
