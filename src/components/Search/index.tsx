import { CiSearch } from "react-icons/ci";
import styles from "./index.module.css";

const Search = () => {
  return (
    <label className={styles.label}>
      <CiSearch size={24} />
      <input
        placeholder="Search any component"
        className={styles.input}
        disabled={true}
      />
    </label>
  );
};

export { Search };
