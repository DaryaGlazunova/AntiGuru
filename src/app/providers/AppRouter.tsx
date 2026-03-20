import { observer } from "mobx-react-lite";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@pages/Login/ui";
import { Products } from "@pages/Products/ui";
import { useAuthStore } from "@shared/hooks/useStore";

export const AppRouter = observer(() => {
  const { isAuth } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={!isAuth ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={isAuth ? <Products /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
});
