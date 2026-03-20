import type { ChangeEvent, JSX } from "react";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

import { AUTH_FIELD } from "@features/AuthForm/lib/constants";
import type { ChangeInputType } from "@features/AuthForm/lib/types";
import styles from "./RememberCheckbox.module.scss";

type Props = {
  checked: boolean;
  onChange: ChangeInputType;
};

function RememberCheckbox({ checked, onChange }: Props): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target);
  };

  const CheckboxIcon = checked
    ? MdOutlineCheckBox
    : MdOutlineCheckBoxOutlineBlank;

  return (
    <div className={styles["field"]}>
      <div className={styles["field__checkbox"]}>
        <input
          className={styles["field__input"]}
          id={AUTH_FIELD.remember}
          name={AUTH_FIELD.remember}
          type="checkbox"
          checked={checked}
          onChange={handleInputChange}
        />
        <CheckboxIcon className={styles["field__icon"]} />
      </div>
      <label className={styles["field__label"]} htmlFor={AUTH_FIELD.remember}>
        Запомнить данные
      </label>
    </div>
  );
}

export default RememberCheckbox;
