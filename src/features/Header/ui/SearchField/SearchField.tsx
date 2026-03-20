import { memo, type JSX } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchField.module.scss";

type Props = {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchField({ inputValue, onChange }: Props): JSX.Element {
  return (
    <div className={styles["searchbar"]}>
      <div className={styles["searchbar__field"]}>
        <CiSearch className={styles["searchbar__icon"]} />
        <input
          className={styles["searchbar__input"]}
          type="text"
          placeholder="Найти"
          value={inputValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default memo(SearchField);
