import { FunctionComponent } from "react";
import HeaderCell from "../components/HeaderCell";
import TransactionNumberCell from "../components/TransactionNumberCell";
import RecipientAccountCell from "../components/RecipientAccountCell";
import AmountCurrencyCell from "../components/AmountCurrencyCell";
import CustomerReferenceNumberCell from "../components/CustomerReferenceNumberCell";
import AttachmentCell from "../components/AttachmentCell";
import ActionCell from "../components/ActionCell";
import StateCell from "../components/StateCell";
import Information from "../components/Information";
import Tag from "../components/Tag";
import styles from "./Components.module.css";

const Components: FunctionComponent = () => {
  return (
    <div className={styles.components}>
      <HeaderCell heading="Transaction No." />
      <TransactionNumberCell transationNumber="#1" />
      <RecipientAccountCell
        recipientAccountName="Sam Bellevue"
        recipientAccountNumber="98768602797"
      />
      <AmountCurrencyCell amount="7,000" currency="USD" />
      <CustomerReferenceNumberCell customerReferenceNumber="123494ABS379/29310" />
      <AttachmentCell fileName="Document.pdf" />
      <ActionCell edit="/edit.svg" />
      <StateCell />
      <Information />
      <div className={styles.tagContainer}>
        <Tag type="pending" />
        <Tag
          type="approved"
        />
        <Tag
          type="rejected"
        />
      </div>
    </div>
  );
};

export default Components;
