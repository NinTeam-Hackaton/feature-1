import { useState } from "react";
import StepsItem from "./StepsItem";
import s from "./style.module.css";

const Steps = () => {
  const steps = [
    "Welcome!",
    "Our Original Story",
    "Our Vision & Mission",
    "Our Core Values",
    "Core Value 1: Show Up Ready",
    "Activity: Awesome to the Core...Values",
    "Employee of the Month",
    "Our Culture",
  ];
  const [selectStepIndex, setSelectStepIndex] = useState(null);

  const handleStepClick = (index: any) => {
    setSelectStepIndex(index);
  };

  return (
    <div className={s.Steps}>
      <div className={s.Steps_Title}>Steps</div>
      <div className={s.Steps_Items}>
        {steps.map((step, index) => (
          <StepsItem
            key={index}
            stepName={step}
            isSelect={index === selectStepIndex}
            onStepClick={() => handleStepClick(index)}
          />
        ))}
        <div className={s.NewStep}>+ New Step</div>
      </div>
    </div>
  );
};

export { Steps };
