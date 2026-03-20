import { memo, type JSX } from "react";
import styles from "./RatingCell.module.scss";

type Props = {
  rating: number;
};

const MAX_RATING = 5;
const MIN_RATING = 3.5;

function RatingCell({ rating }: Props): JSX.Element {
  const isMinRating = rating <= MIN_RATING;

  return (
    <div>
      <span className={isMinRating ? styles["low-rating"] : undefined}>
        {rating}
      </span>
      {`/${MAX_RATING}`}
    </div>
  );
}

export default memo(RatingCell);
