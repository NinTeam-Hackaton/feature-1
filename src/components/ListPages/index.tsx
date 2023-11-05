import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { getListPage } from "../../utils/helpers/api";
import styles from "./index.module.css";

const Item = ({ name }: any) => {
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
        <button className={styles.buttonDots}>
          <BsThreeDotsVertical size={24} />
        </button>
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
    <ul>
      {list.map((item: any) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
};

export { ListPages };
