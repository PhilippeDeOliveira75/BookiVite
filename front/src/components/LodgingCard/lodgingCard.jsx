import './lodgingCard.scss';
import { StarRating } from '@components/import';

function LodgingCard({ lodgings, onCardClick }) {
  return (
    <>
      {lodgings.map((lodging) => (
        <article className='w-lodgingCard' key={lodging.id} onClick={() => onCardClick(lodging.id)} >
          <img className='lodgingCardImg' src={lodging.cover} alt={`Image ${lodging.title}`} />
          <div className="w-titlePriceAndRating">
            <h3 className="card-title">{lodging.title}</h3>
            <p className="card-subtitle">Nuit à partir de {lodging.price}<span className='euro'>€</span></p>
            <div className="card-rating">
              <StarRating rating={lodging.rating} />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default LodgingCard;
