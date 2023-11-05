import {
  AiOutlineFontColors,
  AiOutlineItalic,
  AiOutlineStrikethrough,
} from "react-icons/ai";
import { HiListBullet } from "react-icons/hi2";
import { BsParagraph } from "react-icons/bs";
import styles from "./index.module.css";
import Markdown from "../../assets/markdown.png";

const HeaderMarkdown = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={Markdown} alt={"markdown"} />
    </div>
  );
};

export { HeaderMarkdown };
