import type { HeaderKeyType } from "./types";

export const TABLE_HEADERS: {
  label: string;
  key: HeaderKeyType;
}[] = [
  { label: "", key: "checkbox" },
  { label: "Наименование", key: "title" },
  { label: "Вендор", key: "brand" },
  { label: "Артикул", key: "sku" },
  { label: "Оценка", key: "rating" },
  { label: "Цена, ₽", key: "price" },
  { label: "", key: "actions" },
];

export const SKELETON_ROWS_COUNT = 5;
export const SKELETON_HEIGHT = 70;

export const COLUMN_WIDTH: Record<HeaderKeyType, string> = {
  checkbox: "32",
  title: "300",
  brand: "125",
  sku: "125",
  price: "125",
  rating: "125",
  actions: "133",
};

export const SORTABLE_COLUMNS = ["price", "rating"];
