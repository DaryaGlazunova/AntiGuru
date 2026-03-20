import { useEffect, useState, type RefObject } from "react";
import { ROW_HEIGTH } from "./constants";

export const useRowsCount = (
  headerRef: RefObject<HTMLTableSectionElement | null>,
  footerRef: RefObject<HTMLDivElement | null>,
) => {
  const [rowsCount, setRowsCount] = useState(0);

  useEffect(() => {
    const changeRowsCount = () => {
      if (!headerRef.current || !footerRef.current) return;

      const headerBottom = headerRef.current.getBoundingClientRect().bottom;
      const footerHeight = footerRef.current.offsetHeight;

      const availableHeight = window.innerHeight - headerBottom - footerHeight;

      setRowsCount(Math.floor(availableHeight / ROW_HEIGTH) - 1);
    };

    changeRowsCount();

    window.addEventListener("resize", changeRowsCount);

    return () => {
      window.removeEventListener("resize", changeRowsCount);
    };
  }, [headerRef, footerRef]);

  return rowsCount;
};
