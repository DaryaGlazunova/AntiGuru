import Checkbox from "@shared/ui/Checkbox/Checkbox";
import styles from "./CheckboxCell.module.scss";
import { observer } from "mobx-react-lite";
import { useCallback, useMemo } from "react";
import type { ProductType } from "@features/ProductsTable/model/types";
import { useProductsStore } from "@shared/hooks/useStore";

type Props = {
  product: ProductType;
};

export const CheckboxCell = observer(({ product }: Props) => {
  const { id } = product;

  const { selectedProducts, addSelectedProduct, removeSelectedProduct } =
    useProductsStore();

  const isSelected = useMemo(
    () => Boolean(selectedProducts.find((product) => product.id === id)),
    [id, selectedProducts],
  );

  const handleSelectedChange = useCallback(
    (checked: boolean) => {
      if (checked) {
        addSelectedProduct(product);
      } else {
        removeSelectedProduct(product);
      }
    },
    [addSelectedProduct, product, removeSelectedProduct],
  );

  return (
    <div className={styles["cell"]}>
      <Checkbox checked={isSelected} onChange={handleSelectedChange} />
    </div>
  );
});
