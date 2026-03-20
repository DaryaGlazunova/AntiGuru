import type { ProductType } from "@features/ProductsTable/lib/types";

export type HeaderKeyType =
  | Exclude<keyof ProductType, "id" | "category" | "description">
  | "checkbox"
  | "actions";
