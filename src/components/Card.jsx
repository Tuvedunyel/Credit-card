import { useEffect, useState } from "react";

const Card = props => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [cardExpiryYear, setCardExpiryYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardImage, setCardImage] = useState("src/img/visa.png");

  useEffect(() => {
    if (props.cardExpiryMonthInput) {
      setCardExpiryMonth(props.cardExpiryMonthInput);
    } else {
      let tempCardExpiryMonth = "MM";
      setCardExpiryMonth(tempCardExpiryMonth);
    }

    if (props.cardExpiryYearInput) {
      setCardExpiryYear(props.cardExpiryYearInput.slice(2));
    } else {
      let tempCardExpiryYear = "YY";
      setCardExpiryYear(tempCardExpiryYear);
    }
  }, [props.cardExpiryMonthInput, props.cardExpiryYearInput]);

  useEffect( () => {
    if (props.cardCVCInput) {
      // setCardCVC with * for security
      setCardCVC("*".repeat(props.cardCVCInput.length));
    } else {
      setCardCVC("")
    }
  }, [props.cardCVCInput])

  useEffect(() => {
    // if 2 first digits of card number are between 51 and 55, then it's a mastercard
    if (
      props.cardNumberInput.substring(0, 2) >= 51 &&
      props.cardNumberInput.substring(0, 2) <= 55
    ) {
      setCardImage("src/img/mastercard.png");
    } else if (
      props.cardNumberInput.substring(0, 2) >= 34 &&
      props.cardNumberInput.substring(0, 2) <= 37
    ) {
      setCardImage("src/img/amex.png");
    } else if (props.cardNumberInput.substring(0, 4) == 6011) {
      setCardImage("src/img/discover.png");
    } else if (props.cardNumberInput.substring(0, 4) == 9792) {
      setCardImage("src/img/troy.png");
    } else {
      setCardImage("src/img/visa.png");
    }
    // If props.cardNumberInput is not empty, update cardNumber join with space each 4 digits
    if (props.cardNumberInput.length > 0) {
      let tempCardNumber = props.cardNumberInput.match(/.{1,4}/g);
      setCardNumber(tempCardNumber.join(" "));
    } else {
      setCardNumber("#### #### #### ####");
    }
  }, [props.cardNumberInput]);

  useEffect(() => {
    if (props.cardNameInput.length > 0) {
      setCardName(props.cardNameInput);
    } else {
      setCardName("NOM COMPLET");
    }
  }, [props.cardNameInput]);

  return (
    <div className='card-wrapper'>
      <div className={ props.focusCVCActive ? 'card-container active' : 'card-container'}>
        <section className='card-front card-side'>
          <div
            id='focus'
            className={props.focusIsActive ? "card-focus active" : "card-focus"}
          ></div>
          <div className='card-bgImg'>
            <img
              src='./src/img/cerdit-card-bg.jpg'
              alt='Carte de crédit'
              aria-label='Carte de crédit'
            />
          </div>
          <div className='card-information__front'>
            <div className='card-information__top'>
              <img
                src='./src/img/chip.png'
                alt='puce de carte'
                className='card-chip'
              />
              <div className='card-type'>
                <img
                  src={cardImage}
                  alt='Carte Visa'
                  className='card-typeImg'
                />
              </div>
            </div>
            <label htmlFor={props.cardNumberId} className='cardNumber'>
              {cardNumber}
            </label>
            <div className='card-content'>
              <label htmlFor={props.cardNameId} className='cardName'>
                <p className='card-holder'>Détenteur</p>
                <p className='card-holder-name'>{cardName}</p>
              </label>
              <div className='card-date'>
                <label
                  htmlFor={props.cardExpiryMonthId}
                  className='card-dateTitle'
                >
                  Expires
                </label>
                <label
                  htmlFor={props.cardExpiryMonthId}
                  className='card-dateItem'
                >
                  {cardExpiryMonth < 10
                    ? `0${cardExpiryMonth}`
                    : cardExpiryMonth}
                </label>
                /
                <label
                  htmlFor={props.cardExpiryYearId}
                  className='card-dateItem'
                >
                  {cardExpiryYear}
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className='card-back card-side'>
          <div className='card-bgImg'>
            <img
              src='./src/img/cerdit-card-bg.jpg'
              alt='Carte de crédit'
              aria-label='Carte de crédit'
            />
          </div>
          <div className='cardBande'></div>
          <div className='cardCvv'>
            <div className='cardCvv__title'>CVV</div>
            <div className='cardCvv__band'>{cardCVC}</div>
            <div className='card-type'>
              <img src={cardImage} className='card-typeImg' alt="Carte bleu" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
