import { AppRouter, StoreProvider } from "./providers";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles["app"]}>
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
