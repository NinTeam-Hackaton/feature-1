import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { options } from "./index.mock";
import { DropDown } from "../DropDown";
import { getListPage } from "../../utils/helpers/api";
import styles from "./index.module.css";

const Item = ({ name }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className={styles.wrapperItem}>
      <BsChevronRight />
      <div className={styles.wrapperFiles}>
        <FaRegFileAlt size={16} />
        <p className={styles.item}>{name}</p>
      </div>
      <div className={styles.wrapperAction}>
        <span className={styles.steps}>8 steps</span>
        {/* <button></button> */}
        <DropDown options={options} isOpen={isOpen} setIsOpen={setIsOpen}>
          <button onClick={() => setIsOpen(true)} className={styles.buttonDots}>
            <BsThreeDotsVertical size={24} />
          </button>
        </DropDown>
      </div>
    </li>
  );
};

const ListPages = () => {
  const [list, setList] = useState<any>([]);
  const requst = async () => {
    const result = await getListPage();
    console.log(result, "result");
    if (result) {
      setList(result.pages);
    }
  };

  useEffect(() => {
    requst();
  }, []);
  return (
    <ul className={styles.wrapperList}>
      {list.map((item: any) => {
        return <Item key={item.id} {...item} />;
      })}
      <li className={styles.wrapperItem}>
        <p className={styles.textEnter}>Enter topic or a test name</p>
        <div className={styles.wrapperAction}>
          {/* <button></button> */}
          <Link to={"/create-components"} className={styles.createButton}>
            Create
          </Link>
        </div>
      </li>
    </ul>
  );
};

export { ListPages };
