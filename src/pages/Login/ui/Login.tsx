import { observer } from "mobx-react-lite";
import { AuthForm } from "@features/AuthForm/ui/AuthForm";
import { useAuthStore } from "@shared/hooks/useStore";
import LoginIcon from "./icons/LoginIcon";
import styles from "./Login.module.scss";

export const Login = observer(() => {
  const { error } = useAuthStore();

  return (
    <div className={styles["login"]}>
      <div className={styles["login__popup"]}>
        <div className={styles["login__popup-container"]}>
          <LoginIcon className={styles["login__popup-icon"]} />
          <div className={styles["login__popup-header"]}>
            <div className={styles["login__popup-header-title"]}>
              Добро пожаловать!
            </div>
            <div className={styles["login__popup-header-subtitle"]}>
              Пожалуйста, авторизируйтесь
            </div>
          </div>

          <div className={styles["login__popup-body"]}>
            <AuthForm />
            {error && (
              <div
                className={styles["login__popup-header-error"]}
              >{`Ошибка авторизации: ${error}`}</div>
            )}
            <div className={styles["login__popup-body-separator"]}>
              <div className={styles["login__popup-body-separator-line"]} />
              <div className={styles["login__popup-body-separator-text"]}>
                или
              </div>
              <div className={styles["login__popup-body-separator-line"]} />
            </div>
          </div>

          <div className={styles["login__popup-footer"]}>
            <div className={styles["login__popup-footer-text"]}>
              Нет аккаунта?
            </div>
            <div className={styles["login__popup-footer-button"]}>Создать</div>
          </div>
        </div>
      </div>
    </div>
  );
});
