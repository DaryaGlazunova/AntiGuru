import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import type { ProductType } from "./types";
import { fetchProducts } from "./productsApi";

export class ProductsStore {
  products: ProductType[] = [];
  selectedProducts: ProductType[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      products: observable,
      selectedProducts: observable,
      error: observable,
      isLoading: observable,

      getProducts: action,
      addSelectedProduct: action,
      removeSelectedProduct: action,

      productsAmount: computed,
    });
  }

  getProducts = async (searchValue?: string) => {
    this.isLoading = true;
    this.error = null;

    try {
      const data = await fetchProducts(searchValue);

      if (!data) {
        throw new Error(`Error when fetch products`);
      }

      runInAction(() => {
        this.products = data;
      });
    } catch (error) {
      if (error instanceof Error) {
        runInAction(() => {
          this.error = error.message;
        });
      }
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };

  addSelectedProduct = (product: ProductType) => {
    this.selectedProducts = [...this.selectedProducts, product];
  };

  removeSelectedProduct = (product: ProductType) => {
    this.selectedProducts = this.selectedProducts.filter(
      (item) => item.id !== product.id,
    );
  };

  get productsAmount() {
    return this.products.length;
  }
}
