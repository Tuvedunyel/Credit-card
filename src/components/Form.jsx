const Form = props => {
  const handleCardNumber = e => {
    let cardNumber = e.target.value;
    if (cardNumber.length <= 16) {
      props.setCardNumberInput(e.target.value);
    }
  };

  const handleCardName = e => {
    props.setCardNameInput(e.target.value);
  };

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
      <div className="cardFormRow">
          <div className="expiryContainer">
            <label htmlFor={props.cardExpiryMonthId} className='cardInput'>
              <span className='cardInput__label'>Date d'expiration</span>
              <select id={props.cardExpiryMonthId} defaultValue="default">
                <option disabled="disabled" value="default">Mois</option>  
              </select>
              <select id={props.cardExpiryYearId} defaultValue="default">
                <option disabled="disabled" value="default">Année</option>
              </select>
            </label>
          </div>
      </div>
    </form>
  );
};

export default Form;
