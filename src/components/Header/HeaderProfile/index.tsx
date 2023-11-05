import s from "./style.module.css";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import Avatar from "../../../assets/profile_avatar.png";

const HeaderProfile = () => {
  return (
    <div className={s.HeaderProfile}>
      <div className={s.Service}>
        <span>
          <BsQuestionCircle />
        </span>
        <span>
          <AiOutlineBell />
        </span>
      </div>

      <div className={s.Profile_Service}>
        <div className={s.AddButton}>+</div>
        <div className={s.Profile}>
          <img src={Avatar} alt="Avatar Profile" />
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
