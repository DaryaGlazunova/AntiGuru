import { memo, type JSX } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import type { ProductType } from "@features/ProductsTable/lib/types";
import type { SortChangeType, SortType } from "../types";
import { ROW_HEIGTH } from "../constants";
import { TableRow } from "./TableRow";
import TableHeader from "./TableHeader";
import { SKELETON_ROWS_COUNT, TABLE_HEADERS } from "./constants";
import styles from "./Table.module.scss";

type Props = {
  products: ProductType[];
  headerRef: React.RefObject<HTMLTableSectionElement | null>;
  isLoading: boolean;
  sort: SortType;
  onSort: SortChangeType;
};

function Table({
  products,
  headerRef,
  isLoading,
  sort,
  onSort,
}: Props): JSX.Element {
  return (
    <div className={styles["table-container"]}>
      <table className={styles["table"]}>
        <TableHeader ref={headerRef} sort={sort} onSort={onSort} />
        <tbody>
          {isLoading
            ? Array.from({ length: SKELETON_ROWS_COUNT }).map((_, index) => (
                <tr key={`skeleton${index}`}>
                  <td colSpan={TABLE_HEADERS.length}>
                    <Skeleton height={ROW_HEIGTH} count={1} />
                  </td>
                </tr>
              ))
            : products.map((product) => (
                <TableRow key={product.id} rowData={product} />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);
