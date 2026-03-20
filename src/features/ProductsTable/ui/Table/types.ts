import type { ProductType } from "@features/ProductsTable/model/types";

export type HeaderKeyType =
  | Exclude<keyof ProductType, "id" | "category" | "description">
  | "checkbox"
  | "actions";
