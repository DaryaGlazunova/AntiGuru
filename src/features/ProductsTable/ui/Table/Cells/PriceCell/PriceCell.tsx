import { memo, type JSX } from "react";
import { formatPrice } from "./helpers";
import styles from "./PriceCell.module.scss";

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

export default memo(PriceCell);
