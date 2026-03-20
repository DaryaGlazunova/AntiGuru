import { observer } from "mobx-react-lite";
import styles from "./Header.module.scss";
import SearchField from "./SearchField/SearchField";
import { useCallback, useState } from "react";

export const Header = observer(() => {
  const [localSearchInput, setLocalSearchInput] = useState("");

  const handleSearchChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchInput(ev.target.value);
    },
    [],
  );
  return (
    <div className={styles["header"]}>
      <div className={styles["header__title"]}>Товары</div>
      <div className={styles["header__search"]}>
        <SearchField
          inputValue={localSearchInput}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
});
