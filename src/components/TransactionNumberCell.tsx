import { FunctionComponent } from "react";
import styles from "./TransactionNumberCell.module.css";

export type TransactionNumberCellType = {
  className?: string;
  transationNumber?: string;
};

const TransactionNumberCell: FunctionComponent<TransactionNumberCellType> = ({
  className = "",
  transationNumber,
}) => {
  return (
    <div className={[styles.transactionNumberCell, className].join(" ")}>
      <b className={styles.transationNumber}>{transationNumber}</b>
    </div>
  );
};

export default TransactionNumberCell;
