import { FunctionComponent } from "react";
import styles from "./CustomerReferenceNumberCell.module.css";

export type CustomerReferenceNumberCellType = {
  className?: string;
  customerReferenceNumber?: string;
};

const CustomerReferenceNumberCell: FunctionComponent<
  CustomerReferenceNumberCellType
> = ({ className = "", customerReferenceNumber }) => {
  return (
    <div className={[styles.customerReferenceNumberCell, className].join(" ")}>
      <div className={styles.customerReferenceNumber}>
        {customerReferenceNumber}
      </div>
    </div>
  );
};

export default CustomerReferenceNumberCell;
