import { Link } from "react-router-dom";
import s from "./style.module.css";

const InputEdit = () => {
  return (
    <Link to="/" className={s.Status}>
      View Mode
    </Link>
  );
};

export { InputEdit };
