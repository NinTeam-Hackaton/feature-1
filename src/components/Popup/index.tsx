import s from "./style.module.css";
import { GrClose } from "react-icons/gr";

const Popup = () => {
  return (
    <>
      <div className={s.PopupBlur}></div>
      <div className={s.Popup}>
        <div className={s.CloseButton}>
          <span>
            <GrClose />
          </span>
        </div>
        <div className={s.Popup_info}>
          <div className={s.Popup_Body}>
            <div className={s.Popup_Body_Title}>
              There are unpublished changes
            </div>
            <div className={s.Popup_Body_Warning}>
              Are you sure you want to open Content block library. This will
              discard all changes you’ve done
            </div>
          </div>
          <div className={s.Popup_Buttons}>
            <div className={s.Popup_Button}>Open Library</div>
            <div className={s.Popup_Button_Return}>Return to Editor</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Popup };
