import { memo, type JSX } from "react";
import cn from "classnames";
import Checkbox from "@shared/ui/Checkbox/Checkbox";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { SortChangeType, SortType, SotableColumns } from "../types";
import { SORTABLE_KEYS } from "../constants";
import type { HeaderKeyType } from "./types";
import { COLUMN_WIDTH, TABLE_HEADERS } from "./constants";
import styles from "./TableHeader.module.scss";

type Props = {
  sort: SortType;
  onSort: SortChangeType;
};

function TableHeader({ sort, onSort }: Props): JSX.Element {
  const handleHeaderClick = (key: HeaderKeyType) => () => {
    if (SORTABLE_KEYS.includes(key as SotableColumns)) {
      onSort(key as SotableColumns);
    }
  };

  return (
    <thead className={styles["header"]}>
      <tr>
        {TABLE_HEADERS.map((header) => (
          <th
            key={header.key}
            style={{ width: `${COLUMN_WIDTH[header.key]}px` }}
          >
            <div
              className={cn(styles["header__cell"], {
                [styles["header__cell_left-align"]]: header.key === "title",
                [styles["header__cell_with-sort"]]: SORTABLE_KEYS.includes(
                  header.key as SotableColumns,
                ),
              })}
              onClick={handleHeaderClick(header.key)}
            >
              {header.key === "checkbox" ? (
                <Checkbox checked={false} disabled />
              ) : (
                <>
                  {header.label}
                  {sort?.key === header.key && (
                    <span>
                      {sort.order === "asc" ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  )}
                </>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default memo(TableHeader);
