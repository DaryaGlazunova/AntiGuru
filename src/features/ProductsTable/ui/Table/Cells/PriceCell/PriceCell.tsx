import type { JSX } from "react";
import styles from "./PriceCell.module.scss";
import { formatPrice } from "./helpers";

type Props = {
  price: number;
};

function PriceCell({ price }: Props): JSX.Element {
  const formatted = formatPrice(price);

  const [integer, fraction] = formatted.split(",");

  return (
    <div>
      {integer}
      <span className={styles["fraction"]}>,{fraction}</span>
    </div>
  );
}

export default PriceCell;
