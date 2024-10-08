import { FunctionComponent } from "react";
import styles from "./Information.module.css";

export type InformationType = {
  className?: string;
};

const Information: FunctionComponent<InformationType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.information, className].join(" ")}>
      <b className={styles.heading}>Internal Company Email ID</b>
      <div className={styles.value}>sambellevue@mail.com</div>
    </div>
  );
};

export default Information;
