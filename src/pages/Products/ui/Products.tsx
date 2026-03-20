import type { JSX } from "react";
import styles from "./Products.module.scss";
import { ProductsTable } from "@features/ProductsTable/ui/ProductsTable";

function Products(): JSX.Element {
  return (
    <div className={styles["products"]}>
      <ProductsTable />
    </div>
  );
}

export default Products;
