import { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const [cardNumberInput, setCardNumberInput] = useState("");
  const [cardNameInput, setCardNameInput] = useState("");
  const cardNumberId = "cardNumber";
  const cardNameId = "cardName";
  const cardExpiryId = "cardExpiry";
  const cardExpiryMonthId = "cardExpiryMonth";
  const cardExpiryYearId = "cardExpiryYear";
  const [focusIsActive, setFocusIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    handleFocus();
  }, [isClicked]);


  const handleFocus = () => {
    const focus = document.getElementById("focus");
    const cardNumberFocus = document.getElementById(cardNumberId);
    const cardNameFocus = document.getElementById(cardNameId);

    if (cardNumberFocus === document.activeElement) {
      setFocusIsActive(true);
      focus.style["width"] = "376px";
      focus.style["height"] = "47px";
      focus.style["transform"] = "translate(15px, 114px)";
    } else if (cardNameFocus === document.activeElement) {
      setFocusIsActive(true);
      focus.style["width"] = "315px";
      focus.style["height"] = "47px";
      focus.style["transform"] = "translate(15px, 186px)";
    } else {
      focus.style["width"] = "100%";
      focus.style["height"] = "100%";
      focus.style["transform"] = "translate(0, 0)";
      setFocusIsActive(false);
    }
  };
  return (
    <div className='container' onClick={() => setIsClicked(!isClicked)}>
      <Card
        cardNumberInput={cardNumberInput}
        cardNameInput={cardNameInput}
        cardNumberId={cardNumberId}
        setCardNumberInput={setCardNumberInput}
        focusIsActive={focusIsActive}
        cardNameId={cardNameId}
        cardExpiryId={cardExpiryId}
        cardExpiryMonthId={cardExpiryMonthId}
        cardExpiryYearId={cardExpiryYearId}
      />
      <Form
        setCardNumberInput={setCardNumberInput}
        setCardNameInput={setCardNameInput}
        cardNumberId={cardNumberId}
        cardNameId={cardNameId}
        cardExpiryId={cardExpiryId}
        cardExpiryMonthId={cardExpiryMonthId}
        cardExpiryYearId={cardExpiryYearId}
      />
      {/* <form action=''>
        <label htmlFor={cardNumberId} onClick={handleFocus}>
          Numéro de carte
          <input
            type='text'
            id={cardNumberId}
            aria-label='Numéro de carte'
            onChange={handleChange}
            maxLength='16'
          />
        </label>
      </form> */}
    </div>
  );
};

export default App;
