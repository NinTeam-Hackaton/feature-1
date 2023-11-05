import s from "./style.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ArrowBack = () => {
  return (
    <div className={s.ArrowBack}>
      <div className={s.Icon}>
        <AiOutlineArrowLeft />
      </div>

      <div>TEMPLATE - Welcome to test</div>
    </div>
  );
};

export default ArrowBack;
