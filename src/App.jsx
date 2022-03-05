import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [cardNumberInput, setCardNumberInput] = useState("");
  const cardId = "cardNumber";
  const [focusIsActive, setFocusIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect( () => {
    handleFocus();
  }, [isClicked])

  const handleChange = e => {
    let cardNumber = e.target.value;
    if (cardNumber.length <= 16) {
      setCardNumberInput(e.target.value);
    }
  };

  const handleFocus = () => {
    const focus = document.getElementById("focus");
    const cardNumberInput = document.getElementById(cardId);

    if (cardNumberInput === document.activeElement) {
      setFocusIsActive(true);
      focus.style["width"] = "376px";
      focus.style["height"] = "47px";
      focus.style["transform"] = "translate(15px, 114px)";
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
        cardId={cardId}
        setCardNumberInput={setCardNumberInput}
        handleFocus={handleFocus}
        focusIsActive={focusIsActive}
      />
      <form action=''>
        <label htmlFor={cardId} onClick={handleFocus}>
          Numéro de carte
          <input
            type='text'
            id={cardId}
            aria-label='Numéro de carte'
            onChange={handleChange}
            maxLength='16'
          />
        </label>
      </form>
    </div>
  );
};

export default App;
