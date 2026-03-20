import { useState, type JSX } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./AddPopup.module.scss";
import type { ProductType } from "@features/ProductsTable/model/types";
import type { PartialProductType } from "../types";

type Props = {
  onAddClick: (data: PartialProductType) => void;
};

const INITIAL_DATA = {
  title: "",
  price: 0,
  brand: "",
  sku: "",
};

function AddPopup({ onAddClick }: Props): JSX.Element {
  const [newProductData, setNewProductData] =
    useState<PartialProductType>(INITIAL_DATA);

  const handleInputChange =
    (field: keyof ProductType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        field === "price" ? Number(event.target.value) : event.target.value;

      setNewProductData((prev) => ({ ...prev, [field]: value }));
    };

  const handleAddButtonClick = () => {
    onAddClick(newProductData);
    setNewProductData(INITIAL_DATA);
  };

  return (
    <div className={styles["popup"]}>
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

export default AddPopup;
