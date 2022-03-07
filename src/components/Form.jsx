import { useEffect, useState } from "react";


const Form = props => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const currentYear = (new Date().getFullYear());
  const [years, setYears] = useState( [new Date().getFullYear(), new Date().getFullYear() + 1, new Date().getFullYear() + 2, new Date().getFullYear() + 3]);

  useEffect( () => {
    setYears(Array.from({ length: 20 }, (_, i) => currentYear + i));
  }, []);


  const handleCardNumber = e => {
    let cardNumber = e.target.value;
    if (cardNumber.length <= 16) {
      props.setCardNumberInput(e.target.value);
    }
  };

  const handleCardName = e => {
    props.setCardNameInput(e.target.value);
  };

  const handleExpiryMonth = e => {
    props.setCardExpiryMonthInput(e.target.value);
  };

  const handleExpiryYear = e => {
    props.setCardExpiryYearInput(e.target.value);
  };

  const handleCardCVC = e => {
    props.setCardCVCInput(e.target.value);
  }

  return (
    <form action='' className='cardFormInner'>
      <label htmlFor={props.cardNumberId} className='cardInput'>
        <span className='cardInput__label'>Numéro de carte</span>
        <input
          type='text'
          id={props.cardNumberId}
          onChange={handleCardNumber}
          aria-label='Entrez votre numéro de carte'
          maxLength='16'
        />
      </label>
      <label htmlFor={props.cardNameId} className='cardInput'>
        <span className='cardInput__label'>Nom du titulaire de la carte</span>
        <input
          type='text'
          id={props.cardNameId}
          onChange={handleCardName}
          aria-label='Entrez le nom du titulaire de la carte'
        />
      </label>
      <div className='cardFormRow'>
        <div className='expiryContainer'>
          <label htmlFor={props.cardExpiryMonthId} className='cardInput'>
            <span className='cardInput__label'>Date d'expiration</span>
            <select
              id={props.cardExpiryMonthId}
              defaultValue='default'
              onChange={handleExpiryMonth}
            >
              <option disabled='disabled' value='default'>
                Mois
              </option>
              {months.map(month => (
                <option value={month} key={month}>
                  {month < 10 ? "0" + month : month}
                </option>
              ))}
            </select>
            <select
              id={props.cardExpiryYearId}
              defaultValue='default'
              onChange={handleExpiryYear}
            >
              <option disabled='disabled' value='default'>
                Année
              </option>
              {years.map(year => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="cardCcv">
                <label htmlFor={props.cardCVCId} className="cardInput">
                  <span className="cardInput__label">CVV</span>
                  <input id={props.cardCVCId} type="text" maxLength="4" className="cardInput__input" onChange={handleCardCVC} />  
                </label>
        </div>
      </div>
    </form>
  );
};

export default Form;
