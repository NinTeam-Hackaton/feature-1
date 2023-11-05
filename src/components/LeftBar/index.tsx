import ArrowBack from "./ArrowBack";
import { InputSelect } from "./InputSelect";
import { NameLeftDoc } from "./NameLeftDoc";
import { Steps } from "./Steps";
import s from "./style.module.css";

const LeftBar = () => {
  return (
    <div className={s.LeftBar}>
      <div className={s.LeftBar_Wrapper}>
        <ArrowBack />
        <NameLeftDoc />
        <InputSelect />
        <Steps />
      </div>
    </div>
  );
};

export { LeftBar };
