import s from "./style.module.css";
import { HiOutlineDocumentText } from "react-icons/hi";

const NameLeftDoc = () => {
  return (
    <div className={s.NameLeftDoc}>
      <div className={s.CenterContent}>
        <div className={s.Icon_Background}>
          <HiOutlineDocumentText className={s.Icon} />
        </div>

        <div className={s.LeftDocName}>All About Us</div>
        <div className={s.DocTimeReading}>~13 min read</div>
      </div>
    </div>
  );
};

export { NameLeftDoc };
