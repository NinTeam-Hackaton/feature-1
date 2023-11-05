import s from "./style.module.css";
import { BsArrowDownShort } from "react-icons/bs";

const InputSelectItem = () => {
  return (
    <div className={s.InputSelectItem}>
      <div className={s.InputSelectItem_Wrapper}>
        <div className={s.Status_Color}></div>
        <div className={s.Status}>Finished</div>

        <div className={s.Icon}>
          <BsArrowDownShort />
        </div>
      </div>
    </div>
  );
};

export { InputSelectItem };
