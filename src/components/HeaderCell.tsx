import { FunctionComponent } from "react";
import styles from "./HeaderCell.module.css";

export type HeaderCellType = {
  className?: string;
  heading?: string;
};

const HeaderCell: FunctionComponent<HeaderCellType> = ({
  className = "",
  heading,
}) => {
  return (
    <div className={[styles.headerCell, className].join(" ")}>
      <b className={styles.heading}>{heading}</b>
      <img className={styles.chevronIcon} alt="" src="/chevron.svg" />
    </div>
  );
};

export default HeaderCell;
