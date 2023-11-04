import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.css";

type TagProps = {
  tag: any;
};

const Tag: FC<TagProps> = ({ tag }) => {
  const { id, name } = tag;
  return (
    <button className={clsx(styles.tag, { [styles.selectTag]: !id })} key={id}>
      {name}
    </button>
  );
};

export { Tag };
