import { BsFillPencilFill } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import s from "./style.module.css";

const InputEdit = () => {
  return (
    <div className={s.InputSelectItem}>
      <div className={s.InputSelectItem_Wrapper}>
        <div className={s.NameSelect}>
          <div className={s.Icon}>
            <BsFillPencilFill />
          </div>
          <div className={s.Status}>Edit</div>
        </div>

        <div className={s.Icon_Arrow}>
          <BsArrowDownShort />
        </div>
      </div>
    </div>
  );
};

export { InputEdit };
