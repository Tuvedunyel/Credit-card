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
    </form>
  );
};

export default Form;