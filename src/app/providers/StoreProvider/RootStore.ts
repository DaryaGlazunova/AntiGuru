import { AuthStore } from "@features/AuthForm/model/authStore";
import { ProductsStore } from "@features/ProductsTable/model/productsStore";

export class Store {
  authStore: AuthStore;
  productsStore: ProductsStore;

  constructor() {
    this.authStore = new AuthStore();
    this.productsStore = new ProductsStore();
  }
}

export const RootStore = new Store();
