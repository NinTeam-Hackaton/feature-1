import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ListPages } from "../ListPages";
import { IconWave } from "../IconWave";
import styles from "./index.module.css";

const TemplateWelcomeToTest = () => {
  return (
    <div className={styles.wrapperWelcome}>
      <div className={styles.wrapperWaveWithButtons}>
        <span className={styles.textWithWave}>
          <span className={styles.wave}>👋 </span> TEMPLATE - Welcome to test
        </span>
        <div className={styles.wrapperButtons}></div>
      </div>
      <span className={styles.owned}>
        Owned By <span className={styles.testTest}>test test</span>
      </span>
      <span className={styles.learnAll}>
        Learn all about our company origin story, our mission, vision, core
        values, culture, and more!
      </span>
    </div>
  );
};

const TemplatePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contaoinerNav}>
        <div className={styles.wrapperNav}>
          <button className={styles.content}>Content</button>
          <BiChevronRight size={24} />
          <span className={styles.textRouter}>
            👋 TEMPLATE - Welcome to test
          </span>
        </div>
        <Link
          to={"components-library"}
          className={styles.contentBlockLibraryButton}
        >
          Content block library
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M20.9294 15.5714V4.71429C20.9294 3.78571 20.1437 3 19.2152 3H7.78659C6.17944 3 4.92944 4.28571 4.92944 5.85714V18.4286C4.92944 20.0357 6.17944 21.2857 7.78659 21.2857H20.0723C20.5366 21.2857 20.9294 20.9286 20.9294 20.4286C20.9294 19.9643 20.5366 19.5714 20.0723 19.5714H19.7866V17.2143C20.4294 16.9643 20.9294 16.3214 20.9294 15.5714ZM18.0723 19.5714H7.78659C7.14373 19.5714 6.64373 19.0714 6.64373 18.4286C6.64373 17.8214 7.14373 17.2857 7.78659 17.2857H18.0723V19.5714ZM19.2152 15.5714H7.78659C7.35801 15.5714 6.96516 15.6786 6.64373 15.8214V5.85714C6.64373 5.25 7.14373 4.71429 7.78659 4.71429H19.2152V15.5714ZM10.608 8.14286L11.0366 9.21429C11.108 9.25 11.1437 9.28571 11.1794 9.28571C11.1794 9.28571 11.2866 9.28571 11.2866 9.21429L11.7509 8.14286L12.8223 7.71429C12.858 7.67857 12.8937 7.64286 12.8937 7.57143C12.8937 7.53571 12.858 7.5 12.7866 7.46429L11.7509 7L11.3223 5.96429C11.2866 5.89286 11.2509 5.85714 11.1794 5.85714C11.0723 5.85714 11.108 5.89286 11.0723 5.96429L10.608 7L9.5723 7.46429C9.50087 7.46429 9.50087 7.53571 9.50087 7.57143C9.50087 7.64286 9.50087 7.67857 9.5723 7.71429L10.608 8.14286ZM12.358 11.5714C12.358 11.6429 12.3937 11.75 12.4652 11.7857L14.2509 12.5V12.5357L15.0009 14.2857C15.0366 14.3571 15.108 14.4286 15.1794 14.4286C15.2866 14.4286 15.358 14.3571 15.3937 14.2857L16.1437 12.5L17.9294 11.7857C18.0009 11.75 18.0723 11.6786 18.0723 11.5714C18.0723 11.5 18.0009 11.4286 17.9294 11.3929L16.1437 10.6429L15.4294 8.85714C15.358 8.78571 15.2866 8.71429 15.2152 8.71429C15.108 8.71429 15.0366 8.78571 15.0009 8.85714L14.2509 10.6429L12.4652 11.3571C12.3937 11.3929 12.358 11.5 12.358 11.5714Z"
              fill="#6A28EA"
            />
          </svg>
        </Link>
      </div>
      <TemplateWelcomeToTest />
      <ListPages />
    </div>
  );
};

export { TemplatePage };
