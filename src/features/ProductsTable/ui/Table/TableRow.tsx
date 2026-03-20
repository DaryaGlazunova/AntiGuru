import { useMemo, type JSX } from "react";
import cn from "classnames";
import type { ProductType } from "@features/ProductsTable/model/types";
import styles from "./TableRow.module.scss";
import {
  ActionsCell,
  CheckboxCell,
  NameCell,
  PriceCell,
  RatingCell,
} from "./Cells";
import { TABLE_HEADERS } from "./constants";
import type { HeaderKeyType } from "./types";
import { observer } from "mobx-react-lite";
import { useProductsStore } from "@shared/hooks/useStore";

type Props = {
  rowData: ProductType;
};

export const TableRow = observer(({ rowData }: Props) => {
  const { id, title, brand, sku, price, rating, category } = rowData;

  const { selectedProducts } = useProductsStore();

  const isSelected = useMemo(
    () => Boolean(selectedProducts.find((product) => product.id === id)),
    [id, selectedProducts],
  );

  const cellContent: Record<HeaderKeyType, JSX.Element | string | number> = {
    checkbox: <CheckboxCell product={rowData} />,
    title: <NameCell title={title} category={category} />,
    brand: <span className={styles["row__cell_bold"]}>{brand}</span>,
    sku: sku,
    price: <PriceCell price={price} />,
    rating: <RatingCell rating={rating} />,
    actions: <ActionsCell />,
  };

  return (
    <tr
      className={cn(styles["row"], { [styles["row_selected"]]: isSelected })}
      key={id}
    >
      {TABLE_HEADERS.map((header) => (
        <td key={header.key}>
          <div className={styles["row__cell"]}>{cellContent[header.key]}</div>
        </td>
      ))}
    </tr>
  );
});
