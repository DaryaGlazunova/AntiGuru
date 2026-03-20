import { useContext } from "react";
import type { AuthStore } from "@features/AuthForm/model/authStore";
import { StoreContext } from "../../app/providers/StoreProvider/StoreContext";
import type { ProductsStore } from "@features/ProductsTable/model/productsStore";

export const useAuthStore = (): AuthStore => useContext(StoreContext).authStore;

export const useProductsStore = (): ProductsStore =>
  useContext(StoreContext).productsStore;
