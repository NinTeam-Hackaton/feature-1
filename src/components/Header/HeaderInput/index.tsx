import s from "./style.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderInput = () => {
  return (
    <div className={s.HeaderInput}>
      <div className={s.InputContainer}>
        <div className={s.Icon}>
          <AiOutlineSearch />
        </div>

        <input type="text" placeholder="Search Traniual..." />
      </div>
    </div>
  );
};

export default HeaderInput;
