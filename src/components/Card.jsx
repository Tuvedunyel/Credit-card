import { useEffect, useState } from "react";

const Card = (props) => {
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
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <section className='card-front card-side'>
          <div className='card-focus'></div>
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
            <label htmlFor='' className='cardNumber'>
              {cardNumber}
            </label>
            <div className='card-content'>
              <label htmlFor='' className='cardName'>
                <p className='card-holder'>Détenteur</p>
                <p className='card-holder-name'>{cardName}</p>
              </label>
              <div className='card-date'>
                <label htmlFor='' className='card-dateTitle'>
                  Expires
                </label>
                <label htmlFor='' className='card-dateItem'>
                  {cardExpiryMonth}
                </label>
                /
                <label htmlFor='' className='card-dateItem'>
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
