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

  useEffect( () => {
    if (props.cardNameInput.length > 0) {
      setCardName(props.cardNameInput);
    } else {
      setCardName("Full name");
    }
  }, [props.cardNameInput])

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
              htmlFor={props.cardNumberId}
              className='cardNumber'
            >
              {cardNumber}
            </label>
            <div className='card-content'>
              <label
                htmlFor={props.cardNameId}
                className='cardName'
              >
                <p className='card-holder'>Détenteur</p>
                <p className='card-holder-name'>{cardName}</p>
              </label>
              <div className='card-date'>
                <label
                  htmlFor={props.cardExpiryId}
                  className='card-dateTitle'
                >
                  Expires
                </label>
                <label
                  htmlFor={props.cardExpiryMonthId}
                  className='card-dateItem'
                >
                  {cardExpiryMonth}
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
        <section className='card-back card-side'></section>
      </div>
    </div>
  );
};

export default Card;
