import HeaderInput from "./HeaderInput";
import HeaderProfile from "./HeaderProfile";
import s from "./style.module.css";

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.Header_Wrapper}>
        <HeaderInput />
        <HeaderProfile />
      </div>
    </div>
  );
};

export { Header };
