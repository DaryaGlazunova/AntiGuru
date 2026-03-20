import { memo, useState, type ChangeEvent, type JSX } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuLock } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { AUTH_FIELD } from "@features/AuthForm/ui/constants";
import type { ChangeInputType } from "@features/AuthForm/ui/types";
import styles from "./Input.module.scss";

type Props = {
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: ChangeInputType;
};

function Input({ id, name, value, placeholder, onChange }: Props): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = id === AUTH_FIELD.password;
  const isUsername = id === AUTH_FIELD.username;
  const showCross = !isPassword && isUsername && value.length !== 0;
  const showEyeIcon = isPassword && value.length !== 0;

  const PassportVisibleIcon = showPassword ? LuEye : LuEyeOff;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target);
  };

  const handleUserNameClear = () => {
    onChange({ name, value: "" });
  };

  const handleShowPassword = () => setShowPassword((p) => !p);

  return (
    <div className={styles["field"]}>
      <div className={styles["field__left-icon"]}>
        {isUsername && <LuUser className={styles["field__icon"]} />}
        {isPassword && <LuLock className={styles["field__icon"]} />}
      </div>
      <input
        className={styles["field__input"]}
        type={isPassword && !showPassword ? "password" : "text"}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      <div className={styles["field__left-icon"]}>
        {showEyeIcon && (
          <button type="button" onClick={handleShowPassword}>
            <PassportVisibleIcon className={styles["field__icon"]} />
          </button>
        )}
        {showCross && (
          <button type="button" onClick={handleUserNameClear}>
            <RxCross1 className={styles["field__icon"]} />
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(Input);
