import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CardOne from "../Projects/CardOne";
import CardTwo from "../Projects/CardTwo";
import CardThree from "../Projects/CardThree";
import CardFour from "../Projects/CardFour";
import CardFive from "../Projects/CardFive";
import CardSix from "../Projects/CardSix";
import CardSeven from "../Projects/CardSeven";
import CardEight from "../Projects/CardEight";
import CardNine from "../Projects/CardNine";
import CardTen from "../Projects/CardTen";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const ModalContent = (props) => {
  const { card } = props;

  switch (card) {
    case "cardOne":
      return <CardOne />;
    case "cardTwo":
      return <CardTwo />;
    case "cardThree":
      return <CardThree />;
    case "cardFour":
      return <CardFour />;
    case "cardFive":
      return <CardFive />;
    case "cardSix":
      return <CardSix />;
    case "cardSeven":
      return <CardSeven />;
    case "cardEight":
      return <CardEight />;
    case "cardNine":
      return <CardNine />;
    case "cardTen":
      return <CardTen />;
    default:
      return "";
  }
};

const CustomModal = (props) => {
  const { open, setOpen, cardType } = props;
  console.log("cardType", cardType);
  return (
      <div style={styles}>
        <Modal open={open} onClose={() => setOpen(!open)}>
          <ModalContent card={cardType} />
        </Modal>
      </div>
  );
};

export default CustomModal;
