import { useState, useEffect } from 'react'
import './modalUpdate.scss'

function ModalUpdate({ show, onClose, lodging, updateLodging }) {

// Initialiser les valeurs du formulaire avec les valeurs actuelles du logement
  const [formState, setFormState] = useState({
    title: '',
    cover: '',
    price: 0,
    rating: 0,
  })

  useEffect(() => {

    if (lodging) {

      setFormState({
        title: lodging.title,
        cover: lodging.cover,
        price: lodging.price,
        rating: lodging.rating,
      })
    }

  }, [lodging])

  const handleSave = async (e) => {
    e.preventDefault()
    await updateLodging(lodging.id, formState)
    onClose()
  }

  // Réinitialiser les valeurs du formulaire avec les valeurs actuelles du logement
  const handleCancel = () => {

    setFormState({
      title: lodging.title,
      cover: lodging.cover,
      price: lodging.price,
      rating: lodging.rating,
    })

    onClose()
    
  }

  if (!show) {
    return null
  }

  return (

    <div className="modalUpdate">

      <div className="modalContent">

        <span className="close" onClick={handleCancel}> X </span>

        <form onSubmit={handleSave}>

          <label htmlFor="title">Titre</label>
          <input id="title" type="text" value={formState.title} onChange={(e) => setFormState({ ...formState, title: e.target.value })} />
          <label htmlFor="cover">Couverture</label>
          <input id="cover" type="text" value={formState.cover} onChange={(e) => setFormState({ ...formState, cover: e.target.value })} />
          <label htmlFor="price">Prix</label>
          <input id="price" type="number" value={formState.price} onChange={(e) => setFormState({ ...formState, price: e.target.value })} />
          <label htmlFor="rating">Note</label>
          <input id="rating" type="number" value={formState.rating} onChange={(e) => setFormState({ ...formState, rating: e.target.value })} />

          <div className="buttons">
            <button type="button" onClick={handleCancel}>Annuler</button>
            <button type="submit">Sauvegarder</button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default ModalUpdate