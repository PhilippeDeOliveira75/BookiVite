import React from 'react'
import './lodgingDetails.scss'

function LodgingDetails({ lodging, children }) {

  return (

    <div className="lodging-details">
        
      <h1 className="lodging-title">{lodging.title}</h1>
      <img className="lodging-image" src={lodging.cover} alt={`Image of ${lodging.title}`} />
      <div className="lodging-info">
        <p className="lodging-price">Prix par nuit: {lodging.price}€</p>
        <p className="lodging-rating">Note: {lodging.rating}</p>
      </div>
      {children}
    </div>

  )

}

export default LodgingDetails