import { memo, useCallback, useState } from "react";
import { Toaster, toaster } from "material-ui-toaster";
import { TfiReload } from "react-icons/tfi";
import { FiPlusCircle } from "react-icons/fi";
import AddPopup from "./AddPopup/AddPopup";
import styles from "./Actions.module.scss";

export const Actions = memo(() => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleAddClick = () => {
    setShowPopup((prev) => !prev);
  };

  const handleReloadClick = () => window.location.reload();

  const handleProductAdd = useCallback(() => {
    setShowPopup(false);
    toaster.success("Товар успешно добавлен");
  }, []);

  return (
    <div className={styles["actions"]}>
      <button className={styles["actions__reload"]} onClick={handleReloadClick}>
        <TfiReload className={styles["actions__reload-icon"]} />
      </button>
      <button className={styles["actions__add"]} onClick={handleAddClick}>
        <FiPlusCircle className={styles["actions__add-icon"]} />
        <div>Добавить</div>
      </button>
      {showPopup && <AddPopup onAddClick={handleProductAdd} />}
      <Toaster position="top-right" expand={false} />
    </div>
  );
});
