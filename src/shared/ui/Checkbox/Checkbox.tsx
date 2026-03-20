import { memo, type ChangeEvent, type JSX } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";

type Props = {
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function Checkbox({ checked, disabled, onChange }: Props): JSX.Element {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <div
      className={cn(styles["checkbox"], {
        [styles["checkbox_checked"]]: checked,
      })}
    >
      <input
        className={styles["checkbox__input"]}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleClick}
      />
    </div>
  );
}

export default memo(Checkbox);
