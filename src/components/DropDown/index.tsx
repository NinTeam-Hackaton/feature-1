import { useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

const DropDown = ({ options = [], children, isOpen, setIsOpen }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(selectedOption, "selectedOption");
  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      {children}
      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {options.map((option: any, index: number) => {
            const { icon: Icon } = option;
            return (
              <li
                className={clsx(styles.dropdownOption, {
                  [styles.dropdownOptionDisabled]: option.disabled,
                })}
                key={option.id}
                onClick={() => handleOptionClick(option.name)}
              >
                <Icon />
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { DropDown };
