import { useState, ChangeEvent } from "react";
import clsx from "clsx";
import { Tag } from "../Tag";
import { buttons } from "./index.mock";
import styles from "./index.module.css";

const RadioButtonComponents = ({ setElement }: any) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.wrapperComponents}>
      {buttons.map((button) => {
        return (
          <label
            key={button.id}
            className={clsx(styles.customRadioLabel, {
              [styles.customRadioInputChecked]: selectedOption === button.value,
            })}
          >
            <img className={styles.image} src={button.image} alt={"imag"} />
            <input
              type="radio"
              name={"component"}
              value={button.value}
              checked={selectedOption === button.value}
              onChange={(event) => {
                setElement(button.elements);
                handleOptionChange(event);
              }}
              className={styles.customRadioInput}
            />
            {button.name}
            {button.tags.map((tag) => {
              return <Tag key={tag.id} tag={tag} />;
            })}
          </label>
        );
      })}
    </div>
  );
};

export { RadioButtonComponents };
