import './lodgingCard.scss';

// Fonction de rendu des étoiles
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fullStar fa-xs fa-solid fa-star" aria-hidden="true"></i>)
    } else {
      stars.push(<i key={i} className="emptyStar fa-xs fa-solid fa-star" aria-hidden="true"></i>)
    }
  }
  return stars;
};

function LodgingCard({ lodgings }) {
  return (
    <>
      {lodgings.map((lodging, index) => (
        <article className='w-lodgingCard' key={index} >
          <img className='lodgingCardImg' src={lodging.cover} alt={`Image ${lodging.title}`} />
          <div className="w-titlePriceAndRating">
            <h3 className="card-title">{lodging.title}</h3>
            <p className="card-subtitle">Nuit à partir de {lodging.price}<span className='euro'>€</span></p>
            <div className="card-rating">
              {renderStars(lodging.rating)}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default LodgingCard