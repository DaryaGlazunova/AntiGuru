import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { debounce } from "@mui/material";
import { useProductsStore } from "@shared/hooks/useStore";
import SearchField from "./SearchField/SearchField";
import styles from "./SearchProducts.module.scss";

const DEBOUNCE_DELAY = 500;

export const SearchProducts = observer(() => {
  const [localSearchInput, setLocalSearchInput] = useState("");
  const { getProducts } = useProductsStore();

  const handleSearchChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearchInput(ev.target.value);
    },
    [],
  );

  const debouncedSearch = debounce((q: string) => {
    getProducts(q);
  }, DEBOUNCE_DELAY);

  useEffect(() => {
    debouncedSearch(localSearchInput);

    return () => {
      debouncedSearch.clear();
    };
  }, [debouncedSearch, localSearchInput]);

  return (
    <div className={styles["search"]}>
      <div className={styles["search__title"]}>Товары</div>
      <div className={styles["search__field"]}>
        <SearchField
          inputValue={localSearchInput}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
});
