import './popularCard.scss';
import React from 'react';

// Fonction de rendu des étoiles
function renderStars (rating) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fa-xs fa-solid fa-star fullStar" aria-hidden="true"></i>);
    } else {
      stars.push(<i key={i} className="fa-xs fa-solid fa-star emptyStar" aria-hidden="true"></i>);
    }
  }
  return stars
}

function PopularCard({ lodgings }) {
  const filteredLodgings = lodgings.filter(lodging => lodging.rating === 5);

  return (
    <>
      {/* Mapping des hébergements pour générer les cartes */}
      {filteredLodgings.map((lodging, index) => (
        <article className='popularCard' key={index} >
          <img className='popularCardImg' src={lodging.cover} alt={`Image ${lodging.title}`} />
          <div className='w-titleAndRating'>
            <div className='titleAndPrice'>
              <h3 className='popularCardTitle'>{lodging.title}</h3>
              <p className="card-subtitle">Nuit à partir de {lodging.price}<span className="euro">€</span></p>
            </div>
            <div className="card-rating flex items-end">
              {renderStars(lodging.rating)}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default PopularCard;
