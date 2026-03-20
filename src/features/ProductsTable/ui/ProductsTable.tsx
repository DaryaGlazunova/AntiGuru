import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useProductsStore } from "@shared/hooks/useStore";
import Table from "./Table/Table";
import Pagination from "./Pagination/Pagination";
import { SearchProducts } from "./SearchProducts/SearchProducts";
import { PRODUCTS_PER_PAGE } from "./constants";
import styles from "./ProductsTable.module.scss";
import { Actions } from "./Actions/Actions";
import type { SortType, SotableColumns } from "./types";

export const ProductsTable = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<SortType>(null);

  const { products, isLoading, productsAmount, getProducts } =
    useProductsStore();

  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const firstItemNumber = products.length === 0 ? 0 : firstIndex + 1;
  const lastItemNumber = Math.min(lastIndex, productsAmount);

  const visibleProducts = useMemo(() => {
    if (products.length === 0) return [];

    const sortedProducts = [...products];

    if (sort) {
      sortedProducts.sort((a, b) => {
        const valA = a[sort.key];
        const valB = b[sort.key];

        return sort.order === "asc" ? valA - valB : valB - valA;
      });
    }
    return sortedProducts.slice(firstIndex, lastIndex);
  }, [firstIndex, lastIndex, products, sort]);

  const handleSortChange = useCallback((key: SotableColumns) => {
    setSort((prev) => {
      if (!prev || prev.key !== key) {
        return { key, order: "asc" };
      }

      if (prev.order === "asc") return { key, order: "desc" };

      return { key, order: "asc" };
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={styles["products"]}>
      <div className={styles["products__search"]}>
        <SearchProducts />
      </div>
      <div className={styles["products__content"]}>
        <div className={styles["products__top"]}>
          <div className={styles["products__title"]}>Все позиции</div>
          <Actions />
        </div>
        <div className={styles["products__table"]}>
          <Table
            sort={sort}
            products={visibleProducts}
            isLoading={isLoading}
            onSort={handleSortChange}
          />
        </div>
        <div className={styles["products__footer"]}>
          <div className={styles["pagination-info"]}>
            Показано{" "}
            <span
              className={styles["pagination-info__number"]}
            >{`${firstItemNumber}-${lastItemNumber}`}</span>{" "}
            из{" "}
            <span className={styles["pagination-info__number"]}>
              {productsAmount}
            </span>
          </div>
          <Pagination
            productsLength={productsAmount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
});
