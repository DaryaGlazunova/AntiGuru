import { type ReactNode } from "react";
import { RootStore } from "./RootStore";
import { StoreContext } from "./StoreContext";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={RootStore}>{children}</StoreContext.Provider>
  );
};
