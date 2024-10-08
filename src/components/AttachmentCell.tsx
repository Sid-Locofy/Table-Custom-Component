import { FunctionComponent } from "react";
import styles from "./AttachmentCell.module.css";

export type AttachmentCellType = {
  className?: string;
  fileName?: string;
};

const AttachmentCell: FunctionComponent<AttachmentCellType> = ({
  className = "",
  fileName,
}) => {
  return (
    <div className={[styles.attachmentCell, className].join(" ")}>
      <img className={styles.attachFileIcon} alt="" src="/attach-file.svg" />
      <div className={styles.fileName}>{fileName}</div>
    </div>
  );
};

export default AttachmentCell;
