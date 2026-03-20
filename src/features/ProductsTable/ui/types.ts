import type { ProductType } from "../model/types";

export type SortValueType = "asc" | "desc" | null;
export type SotableColumns = Extract<keyof ProductType, "price" | "rating">;

export type SortType = {
  key: SotableColumns;
  order: SortValueType;
} | null;

export type SortChangeType = (key: SotableColumns) => void;
