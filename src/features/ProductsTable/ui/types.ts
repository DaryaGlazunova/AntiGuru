import type { ProductType } from "../model/types";

export type SortOrderType = "asc" | "desc" | null;
export type SotableColumns = Extract<keyof ProductType, "price" | "rating">;

export type SortType = {
  key: SotableColumns;
  order: SortOrderType;
} | null;

export type SortChangeType = (key: SotableColumns) => void;
