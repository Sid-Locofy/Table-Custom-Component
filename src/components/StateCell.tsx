import { FunctionComponent } from "react";
import styles from "./StateCell.module.css";

export type StateCellType = {
  className?: string;
};

const StateCell: FunctionComponent<StateCellType> = ({ className = "" }) => {
  return (
    <div className={[styles.stateCell, className].join(" ")}>
      <img className={styles.expandMoreIcon} alt="" src="/expand-more.svg" />
    </div>
  );
};

export default StateCell;
