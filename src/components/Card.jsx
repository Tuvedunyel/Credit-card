const Card = () => {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <div className='card-front card-side'>
            <div className="card-focus"></div>    
            <div className="card-bgImg">
                <img src="./src/img/cerdit-card-bg.jpg" alt="Carte de crédit" />
            </div>
        </div>
        <div className='card-back card-side'></div>
      </div>
    </div>
  );
};

export default Card;
