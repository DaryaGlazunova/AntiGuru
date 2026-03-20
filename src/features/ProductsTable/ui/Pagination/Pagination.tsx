import { memo, type JSX } from "react";
import cn from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PRODUCTS_PER_PAGE } from "../constants";
import styles from "./Pagination.module.scss";

type Props = {
  productsLength: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Pagination({
  productsLength,
  currentPage,
  setCurrentPage,
}: Props): JSX.Element {
  const totalPages = Math.ceil(productsLength / PRODUCTS_PER_PAGE);
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
