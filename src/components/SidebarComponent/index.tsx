import { FC, useState } from "react";
import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./index.module.css";

type SidebarComponentProps = {};

const SidebarComponent: FC<SidebarComponentProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sidebar}>
      <button className={styles.buttonSidebar} onClick={toggleSidebar}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
    </div>
  );
};

export { SidebarComponent };
