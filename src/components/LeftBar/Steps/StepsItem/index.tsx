import s from "./style.module.css";
import { LuListTodo } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

interface IOwnProps {
  stepName: string;
  isSelect: boolean;
  onStepClick: () => void;
}

const StepsItem: React.FC<IOwnProps> = ({
  stepName,
  isSelect,
  onStepClick,
}) => {
  return (
    <div
      className={s.StepsItem}
      onClick={onStepClick}
      style={{ backgroundColor: isSelect ? "#f1f1f1" : "" }}
    >
      <div className={s.StepsItem_Body}>
        <div className={s.Icon}>
          <LuListTodo />
        </div>
        <div
          className={s.StepTitle}
          style={{ color: isSelect ? "purple" : "black" }}
        >
          {stepName}
        </div>
      </div>

      <div className={s.Dots}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default StepsItem;
