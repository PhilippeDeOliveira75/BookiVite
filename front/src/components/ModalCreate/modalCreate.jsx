import { useState } from 'react'
import './modalCreate.scss'

function ModalCreate({ show, onClose, addLodging }) {

  const [formState, setFormState] = useState({
    title: '',
    cover: '',
    price: 0,
    rating: 0,
  })

  const handleSave = async (e) => {
    e.preventDefault();
    try {

      await addLodging(formState)
      console.log("Logement ajouté avec succès !")
      onClose()

    } 
    
    catch (error) {
      console.error('Erreur lors de l\'ajout du logement :', error)
    }
  }

  const handleCancel = () => {
    onClose()
  }

  if (!show) {
    return null
  }

  return (

    <div className="modalCreate">

      <div className="modalContent">

        <span className="close" onClick={handleCancel}> X </span>

        <form onSubmit={handleSave}>
          <label htmlFor="title">Titre</label>
          <input
            id="title"
            type="text"
            value={formState.title}
            onChange={(e) => setFormState({ ...formState, title: e.target.value })}
          />
          <label htmlFor="cover">Couverture</label>
          <input
            id="cover"
            type="text"
            value={formState.cover}
            onChange={(e) => setFormState({ ...formState, cover: e.target.value })}
          />
          <label htmlFor="price">Prix</label>
          <input
            id="price"
            type="number"
            value={formState.price}
            onChange={(e) => setFormState({ ...formState, price: e.target.value })}
          />
          <label htmlFor="rating">Note</label>
          <input
            id="rating"
            type="number"
            value={formState.rating}
            onChange={(e) => setFormState({ ...formState, rating: e.target.value })}
            step="0.1"
          />
          <div className="buttons">
            <button type="button" onClick={handleCancel}>Annuler</button>
            <button type="submit">Sauvegarder</button>
          </div>
        </form>
        
      </div>

    </div>
  )

}

export default ModalCreate