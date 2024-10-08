import { FunctionComponent } from "react";
import styles from "./RecipientAccountCell.module.css";

export type RecipientAccountCellType = {
  className?: string;
  recipientAccountName?: string;
  recipientAccountNumber?: string;
};

const RecipientAccountCell: FunctionComponent<RecipientAccountCellType> = ({
  className = "",
  recipientAccountName,
  recipientAccountNumber,
}) => {
  return (
    <div className={[styles.recipientAccountCell, className].join(" ")}>
      <div className={styles.name}>{recipientAccountName}</div>
      <div className={styles.accountNumber}>{recipientAccountNumber}</div>
    </div>
  );
};

export default RecipientAccountCell;
