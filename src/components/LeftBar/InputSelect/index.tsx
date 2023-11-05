import { InputEdit } from "../InputEdit";
import { InputSelectItem } from "./InputSelectItem";
import s from "./style.module.css";

const InputSelect = () => {
  return (
    <div className={s.InputSelect}>
      <div className={s.InputSelect_Wrapper}>
        <div className={s.InputSelect_Header}>
          <InputSelectItem />
          <InputEdit />
        </div>
      </div>
    </div>
  );
};

export { InputSelect };
