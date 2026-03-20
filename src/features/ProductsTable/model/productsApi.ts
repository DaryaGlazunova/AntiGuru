import type { ProductType } from "./types";

export async function fetchProducts(
  searchValue?: string,
): Promise<ProductType[] | null> {
  const response = await fetch(
    `https://dummyjson.com/products${searchValue ? `/search?q=${searchValue}` : ""}`,
  );

  const data = await response.json();

  if (data.message) {
    throw Error(data.message);
  }

  return data.products;
}
