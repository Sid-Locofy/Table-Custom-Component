import { FunctionComponent } from "react";
import styles from "./AmountCurrencyCell.module.css";

export type AmountCurrencyCellType = {
  className?: string;
  amount?: string;
  currency?: string;
};

const AmountCurrencyCell: FunctionComponent<AmountCurrencyCellType> = ({
  className = "",
  amount,
  currency,
}) => {
  return (
    <div className={[styles.amountCurrencyCell, className].join(" ")}>
      <div className={styles.amountContainer}>
        <div className={styles.amount}>{amount}</div>
        <div className={styles.amount}>.</div>
        <div className={styles.cents}>00</div>
      </div>
      <div className={styles.currency}>{currency}</div>
    </div>
  );
};

export default AmountCurrencyCell;
