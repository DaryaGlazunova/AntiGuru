import { memo, type JSX } from "react";
import cn from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./Pagination.module.scss";

type Props = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: Props): JSX.Element {
  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleChangePageClick = (pageNumber: number) => () => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <nav className={styles["pagination"]}>
      <div onClick={handlePrevClick}>
        <IoIosArrowBack className={styles["pagination__arrow"]} />
      </div>
      <ul className={styles["pagination__list"]}>
        {numbers.map((number) => (
          <li
            key={number}
            className={cn(styles["pagination__item"], {
              [styles["pagination__item_selected"]]: number === currentPage,
            })}
            onClick={handleChangePageClick(number)}
          >
            {number}
          </li>
        ))}
      </ul>
      <div onClick={handleNextClick}>
        <IoIosArrowForward className={styles["pagination__arrow"]} />
      </div>
    </nav>
  );
}

export default memo(Pagination);
