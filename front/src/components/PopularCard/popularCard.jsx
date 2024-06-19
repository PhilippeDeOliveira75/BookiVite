import './popularCard.scss'
import { StarRating } from '@components/import'

function PopularCard ({ lodgings, onCardClick }) {

  const filteredLodgings = lodgings.filter(lodging => lodging.rating === 5)

  return (

    <>

      {filteredLodgings.map((lodging, index) => (

        <article className='popularCard' key={index} onClick={() => onCardClick(lodging.id)}>
          <img className='popularCardImg' src={lodging.cover} alt={`Image ${lodging.title}`} />
          <div className='w-titleAndRating'>
            <div className='titleAndPrice'>
              <h3 className='popularCardTitle'>{lodging.title}</h3>
              <p className="card-subtitle">Nuit à partir de {lodging.price}<span className="euro">€</span></p>
            </div>
            <div className="card-rating flex items-end">
              <StarRating rating={lodging.rating} />
            </div>
          </div>
        </article>

      ))}

    </>

  )

}

export default PopularCard