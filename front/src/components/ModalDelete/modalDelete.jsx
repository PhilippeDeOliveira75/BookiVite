import './modalDelete.scss'

function ModalDelete ({ show, onClose, onConfirm }) {

  if (!show) {
    return null
  }

  return (

    <div className="modalDelete">
      <div className="modalContent">
        <p>Souhaitez-vous supprimer ce logement ?</p>
        <div className="buttons">
          <button onClick={onClose}>Annuler</button>
          <button onClick={onConfirm}>Supprimer</button>
        </div>
      </div>
    </div>
    
  )
  
}

export default ModalDelete