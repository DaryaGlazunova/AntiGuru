import { memo, type JSX } from "react";
import { ProductsTable } from "@features/ProductsTable/ui/ProductsTable";

function Products(): JSX.Element {
  return <ProductsTable />;
}

export default memo(Products);
