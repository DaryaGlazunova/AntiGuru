import { memo, type ChangeEvent, type JSX } from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";

type Props = {
  className?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function Checkbox({
  className,
  checked,
  disabled,
  onChange,
}: Props): JSX.Element {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <div
      className={cn(styles["checkbox"], className, {
        [styles["checkbox_checked"]]: checked,
      })}
    >
      <input
        className={cn(styles["checkbox__input"])}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleClick}
      />
    </div>
  );
}

export default memo(Checkbox);
