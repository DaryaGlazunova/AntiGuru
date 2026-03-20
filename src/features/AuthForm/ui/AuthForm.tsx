import { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { useAuthStore } from "@shared/hooks/useStore";
import { AUTH_FIELD, LOGIN_FORM_ID } from "../lib/constants";
import type { ChangeInputType } from "../lib/types";
import type { AuthOptionsType } from "../model/types";
import { Input } from "./Input";
import { RememberCheckbox } from "./RememberCheckbox";
import styles from "./AuthForm.module.scss";

const ERROR_TEXT = "Поле обязательно к заполнению";

export const AuthForm = observer(() => {
  const [formData, setFormData] = useState<AuthOptionsType>({
    username: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  } | null>(null);
  const { login } = useAuthStore();

  const handleInputChange: ChangeInputType = useCallback(
    ({ name, value, type, checked }) => {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    },
    [],
  );

  const handleSubmit = () => {
    const checkErrors: typeof errors = {};

    if (!formData.username.trim()) {
      checkErrors.username = ERROR_TEXT;
    }
    if (!formData.password.trim()) {
      checkErrors.password = ERROR_TEXT;
    }

    if (Object.keys(checkErrors).length > 0) {
      setErrors(checkErrors);

      return;
    }

    login(formData);
  };

  return (
    <form id={LOGIN_FORM_ID} className={styles["form"]}>
      <div className={styles["form__field"]}>
        <label className={styles["form__label"]} htmlFor={AUTH_FIELD.username}>
          Логин
        </label>
        {errors?.username && (
          <div className={styles["form__error"]}>{errors.username}</div>
        )}
        <Input
          id={AUTH_FIELD.username}
          name={AUTH_FIELD.username}
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles["form__field"]}>
        <label className={styles["form__label"]} htmlFor={AUTH_FIELD.password}>
          Пароль
        </label>
        {errors?.password && (
          <div className={styles["form__error"]}>{errors.password}</div>
        )}
        <Input
          id={AUTH_FIELD.password}
          name={AUTH_FIELD.password}
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles["form__remember"]}>
        <RememberCheckbox
          checked={formData.remember}
          onChange={handleInputChange}
        />
      </div>
      <button
        className={styles["form__submit"]}
        type="button"
        onClick={handleSubmit}
      >
        Войти
      </button>
    </form>
  );
});
