import './lodgingDashboard.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiCaller from '@services/apiCaller';

function LodgingDashboard() {
  const { id } = useParams();
  const [lodging, setLodging] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchLodging = async () => {
      try {
        const { data } = await ApiCaller.getLodgingById(id);
        setLodging(data);
      } catch (error) {
        console.error('Error fetching lodging:', error);
      }
    };

    fetchLodging();
  }, [id]);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
};

const handleDeleteConfirm = async (id) => {
    try {
        await ApiCaller.deleteLodgingById(id);
        // Mettre à jour l'état ou effectuer d'autres actions après la suppression réussie
        console.log("Logement supprimé avec succès !");
        // Cacher le modal après la suppression réussie
        setShowDeleteModal(false);
        // Rediriger vers la page lodgingDashboard après la suppression
        window.location.href = '/lodgingDashboard';
    } catch (error) {
        console.error('Error deleting lodging:', error);
    }
};


  return (
    <div>
      <h1>{lodging.title}</h1>
      <img src={lodging.cover} alt={`Image of ${lodging.title}`} />
      <p>Prix par nuit: {lodging.price}€</p>
      <p>Note: {lodging.rating}</p>
      {/* Boutons Modifier et Supprimer */}
      <button onClick={handleEditClick}>Modifier</button>

      {/* Modal de modification */}
      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowEditModal(false)}>
              &times;
            </span>
            <p>Contenu du modal de modification</p>
            {/* Bouton de confirmation */}
            <button onClick={() => setShowEditModal(false)}>Fermer</button>
          </div>
        </div>
      )}

{/* Bouton Supprimer */}
<button onClick={handleDeleteClick}>Supprimer</button>

{/* Modal de suppression */}
{showDeleteModal && (
    <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={() => setShowDeleteModal(false)}>
                &times;
            </span>
            <p>Souhaitez-vous supprimer ce logement ?</p>
            {/* Boutons Annuler et Supprimer */}
            <button onClick={() => setShowDeleteModal(false)}>Annuler</button>
            <button onClick={() => handleDeleteConfirm(lodging.id)}>Supprimer</button>
        </div>
    </div>
)}
    </div>
  );
}

export default LodgingDashboard;
