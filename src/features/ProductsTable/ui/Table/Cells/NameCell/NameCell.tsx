import type { JSX } from "react";
import { capitalize } from "@shared/helpers/text";
import styles from "./NameCell.module.scss";

type Props = {
  title: string;
  category: string;
};

function NameCell({ title, category }: Props): JSX.Element {
  return (
    <div className={styles["cell"]}>
      <div className={styles["cell__image"]} />
      <div className={styles["cell__content"]}>
        <div className={styles["cell__title"]}>{title}</div>
        <div className={styles["cell__subtitle"]}>{capitalize(category)}</div>
      </div>
    </div>
  );
}

export default NameCell;
