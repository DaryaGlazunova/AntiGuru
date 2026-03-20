import { memo, useState, type JSX } from "react";
import { TextField, Button } from "@mui/material";
import type { ProductType } from "@features/ProductsTable/lib/types";
import type { PartialProductType } from "./types";
import { INITIAL_DATA } from "./constants";
import styles from "./AddPopup.module.scss";

type Props = {
  onAddClick: (data: Partial<ProductType>) => void;
};

function AddPopup({ onAddClick }: Props): JSX.Element {
  const [newProductData, setNewProductData] =
    useState<PartialProductType>(INITIAL_DATA);

  const handleInputChange =
    (field: keyof ProductType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewProductData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleAddButtonClick = () => {
    onAddClick(newProductData);
    setNewProductData(INITIAL_DATA);
  };

  return (
    <div className={styles["popup"]}>
      <div className={styles["popup__title"]}>Добавление элемента</div>
      <TextField
        id="outlined-basic"
        label="Наименование"
        value={newProductData.title}
        variant="outlined"
        onChange={handleInputChange("title")}
      />
      <TextField
        id="outlined-basic"
        label="Цена"
        value={newProductData.price}
        variant="outlined"
        onChange={handleInputChange("price")}
      />
      <TextField
        id="outlined-basic"
        label="Вендор"
        value={newProductData.brand}
        variant="outlined"
        onChange={handleInputChange("brand")}
      />
      <TextField
        id="outlined-basic"
        label="Aртикул"
        value={newProductData.sku}
        variant="outlined"
        onChange={handleInputChange("sku")}
      />
      <Button onClick={handleAddButtonClick}>Создать</Button>
    </div>
  );
}

export default memo(AddPopup);
