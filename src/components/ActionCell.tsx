import { FunctionComponent } from "react";
import styles from "./ActionCell.module.css";

export type ActionCellType = {
  className?: string;
  edit?: string;
};

const ActionCell: FunctionComponent<ActionCellType> = ({
  className = "",
  edit,
}) => {
  return (
    <div className={[styles.actionCell, className].join(" ")}>
      <img className={styles.editIcon} alt="" src={edit} />
    </div>
  );
};

export default ActionCell;
