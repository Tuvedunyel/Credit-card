import { useEffect, useState } from "react";

const Card = props => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [cardExpiryYear, setCardExpiryYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  useEffect(() => {
    let tempCardNumber = ["####", "####", "####", "####"];
    let tempCardName = "Full name";
    let tempCardExpiryMonth = "MM";
    let tempCardExpiryYear = "YY";
    let tempCardCVC = "###";

    setCardNumber(tempCardNumber.join(" "));
    setCardName(tempCardName);
    setCardExpiryMonth(tempCardExpiryMonth);
    setCardExpiryYear(tempCardExpiryYear);
    setCardCVC(tempCardCVC);
  }, []);

  useEffect(() => {
    // If props.cardNumberInput is not empty, update cardNumber join with space each 4 digits
    if (props.cardNumberInput.length > 0) {
      let tempCardNumber = props.cardNumberInput.match(/.{1,4}/g);
      setCardNumber(tempCardNumber.join(" "));
    } else {
      setCardNumber("#### #### #### ####");
    }
  }, [props.cardNumberInput]);

  return (
    <div className='card-wrapper'>
      <div className='card-container'>
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
                  src='./src/img/visa.png'
                  alt='Carte Visa'
                  className='card-typeImg'
                />
              </div>
            </div>
            <label
              htmlFor={props.cardId}
              className='cardNumber'
              // onClick={() => props.handleFocus("cardNumber")}
            >
              {cardNumber}
            </label>
            <div className='card-content'>
              <label
                htmlFor=''
                className='cardName'
                // onClick={() => props.handleFocus("cardName")}
              >
                <p className='card-holder'>Détenteur</p>
                <p className='card-holder-name'>{cardName}</p>
              </label>
              <div className='card-date'>
                <label
                  htmlFor=''
                  className='card-dateTitle'
                  // onClick={() => props.handleFocus("cardExpiry")}
                >
                  Expires
                </label>
                <label
                  htmlFor=''
                  className='card-dateItem'
                  // onClick={() => props.handleFocus("cardExpiry")}
                >
                  {cardExpiryMonth}
                </label>
                /
                <label
                  htmlFor=''
                  className='card-dateItem'
                  // onClick={() => props.handleFocus("cardExpiry")}
                >
                  {cardExpiryYear}
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className='card-back card-side'></section>
      </div>
    </div>
  );
};

export default Card;
