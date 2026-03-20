import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { fetchLogin } from "./authApi";
import type { AuthOptionsType } from "./types";

export class AuthStore {
  accessToken: string | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      accessToken: observable,
      error: observable,
      isLoading: observable,

      login: action,

      isAuth: computed,
    });

    this.initAuth();
  }

  initAuth() {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      this.accessToken = accessToken;
    }
  }

  login = async (options: AuthOptionsType) => {
    this.isLoading = true;
    this.error = null;

    try {
      const data = await fetchLogin(options);

      if (!data) {
        throw new Error(`Login unknown Error`);
      }

      runInAction(() => {
        this.accessToken = data?.accessToken;

        // TODO: add to HTTP-only cookie
        if (options.remember) {
          localStorage.setItem("accessToken", data.accessToken);
        }
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

  get isAuth() {
    return !!this.accessToken;
  }
}
