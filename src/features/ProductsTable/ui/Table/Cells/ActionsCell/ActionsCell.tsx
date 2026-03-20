import { memo, type JSX } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import styles from "./ActionsCell.module.scss";

function ActionsCell(): JSX.Element {
  return (
    <div className={styles["cell"]}>
      <button className={styles["cell__plus-button"]}>
        <AiOutlinePlus className={styles["cell__plus-icon"]} />
      </button>
      <button>
        <CiCircleMore className={styles["cell__more"]} />
      </button>
    </div>
  );
}

export default memo(ActionsCell);
