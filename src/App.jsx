import { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [cardNumberInput, setCardNumberInput] = useState("");
  const [cardNameInput, setCardNameInput] = useState("");
  const [cardExpiryMonthInput, setCardExpiryMonthInput] = useState("");
  const [cardExpiryYearInput, setCardExpiryYearInput] = useState("");
  const [cardCVCInput, setCardCVCInput] = useState("");
  const cardNumberId = "cardNumber";
  const cardNameId = "cardName";
  const cardExpiryMonthId = "cardExpiryMonth";
  const cardExpiryYearId = "cardExpiryYear";
  const cardCVCId = "cardCVC";
  const [focusIsActive, setFocusIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [focusCVCActive, setFocusCVCActive] = useState(false);

  useEffect(() => {
    handleFocus();
  }, [isClicked]);


  const handleFocus = () => {
    const focus = document.getElementById("focus");
    const cardNumberFocus = document.getElementById(cardNumberId);
    const cardNameFocus = document.getElementById(cardNameId);
    const cardExpiryMonthFocus = document.getElementById(cardExpiryMonthId);
    const cardExpiryYearFocus = document.getElementById(cardExpiryYearId);
    const cardCVCFocus = document.getElementById(cardCVCId);

    if (cardNumberFocus === document.activeElement) {
      setFocusCVCActive(false);
      setFocusIsActive(true);
      focus.style["width"] = "376px";
      focus.style["height"] = "47px";
      focus.style["transform"] = "translate(15px, 114px)";
    } else if (cardNameFocus === document.activeElement) {
      setFocusCVCActive(false);
      setFocusIsActive(true);
      focus.style["width"] = "315px";
      focus.style["height"] = "47px";
      focus.style["transform"] = "translate(15px, 186px)";
    } else if ( cardExpiryMonthFocus === document.activeElement || cardExpiryYearFocus === document.activeElement) {
      setFocusCVCActive(false);
      setFocusIsActive(true);
      focus.style["width"] = "80px";
      focus.style["height"] = "57px";
      focus.style["transform"] = "translateX(335px) translateY(186px)";
    } else if (cardCVCFocus === document.activeElement) {
      setFocusCVCActive(true);
    } else {
      focus.style["width"] = "100%";
      focus.style["height"] = "100%";
      focus.style["transform"] = "translate(0, 0)";
      setFocusCVCActive(false);
      setFocusIsActive(false);
    }
  };
  return (
    <div className='container' onClick={() => setIsClicked(!isClicked)}>
      <Card
        cardNumberInput={cardNumberInput}
        cardNameInput={cardNameInput}
        cardExpiryMonthInput={cardExpiryMonthInput}
        cardExpiryYearInput={cardExpiryYearInput}
        cardCVCInput={cardCVCInput}
        cardNumberId={cardNumberId}
        setCardNumberInput={setCardNumberInput}
        focusIsActive={focusIsActive}
        cardNameId={cardNameId}
        cardExpiryMonthId={cardExpiryMonthId}
        cardExpiryYearId={cardExpiryYearId}
        focusCVCActive={focusCVCActive}
      />
      <Form
        setCardNumberInput={setCardNumberInput}
        setCardNameInput={setCardNameInput}
        setCardExpiryMonthInput={setCardExpiryMonthInput}
        setCardExpiryYearInput={setCardExpiryYearInput}
        setCardCVCInput={setCardCVCInput}
        cardNumberId={cardNumberId}
        cardNameId={cardNameId}
        cardExpiryMonthId={cardExpiryMonthId}
        cardExpiryYearId={cardExpiryYearId}
        cardCVCId={cardCVCId}
      />
    </div>
  );
};

export default App;
