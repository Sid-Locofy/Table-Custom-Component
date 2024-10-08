import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Tag.module.css";

export type TagType = {
  className?: string;
  type?: "pending" | "approved" | "rejected";
};

const Tag: FunctionComponent<TagType> = ({
  className = "",
  type,
}) => {
  let label: string;
  let bgColor: string | undefined;
  let border: string | undefined;
  let labelColor: string | undefined;

  switch(type) {
    case "approved":
      bgColor="#e8ffeb";
      border="1px solid #83e08c";
      label="Approved";
      labelColor="#1c7a26";
      break;
    case "rejected":;
      bgColor="#fedfdf"
      border="1px solid #fac0c1"
      label="Rejected"
      labelColor="#db3637"
      break;
    case "pending":
      label="Pending"
      break;
    default:
  }

  const tagStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: bgColor,
      border: border,
    };
  }, [bgColor, border]);

  const tagLabelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div className={[styles.tag, className].join(" ")} style={tagStyle}>
      <div className={styles.tagLabel} style={tagLabelStyle}>
        {label}
      </div>
    </div>
  );
};

export default Tag;
