import './lodgingDashboard.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LodgingCaller} from '@services/import'
import { ModalUpdate, ModalDelete, LodgingDetails } from '@components/import'

function LodgingDashboard () {

  const { id } = useParams()
  const navigate = useNavigate()
  const [lodging, setLodging] = useState(null)
  const [initialLodging, setInitialLodging] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)


  const fetchLodging = async () => {

    try {

      const { data } = await LodgingCaller.getLodgingById(id)
      setLodging(data)
      setInitialLodging(data)
    } 
    
    catch (error) {

      console.error('Erreur lors de la récupération du logement :', error)

    }
  }

  useEffect(() => {

    if (id) {
      fetchLodging()
    } 
    
    else {
      console.log('ID du logement non fourni')
    }
  }, [id])

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  }

  const handleDeleteConfirm = async (id) => {

    try {

      await LodgingCaller.deleteLodgingById(id)
      setShowDeleteModal(false)
      navigate('/admin/dashboard')
    } 
    
    catch (error) {
      console.error('Erreur lors de la suppression du logement :', error)
    }
  }

  const handleEditClick = () => {
    setShowEditModal(true)
  }

  const updateLodging = async (id, updatedLodging) => {

    try {

      await LodgingCaller.updateLodgingById(id, updatedLodging)
      setShowEditModal(false)
      fetchLodging()
    } 
    
    catch (error) {
      console.error('Erreur lors de la mise à jour du logement :', error)
    }
  };

  const handleModalClose = () => {
    setLodging(initialLodging)
    setShowEditModal(false)
  }

  return (

    <div className="lodging-dashboard">

      {lodging ? (

        <LodgingDetails lodging={lodging}>
          <div className="buttons">
            <button onClick={handleEditClick}> Modifier </button>
            <button className="delete-button" onClick={handleDeleteClick}> Supprimer </button>
          </div>
        </LodgingDetails>
      ) : (
        <p>Chargement...</p>
        
      )}

      <ModalUpdate show={showEditModal} onClose={handleModalClose} lodging={lodging} updateLodging={updateLodging} />

      <ModalDelete show={showDeleteModal} onClose={() => setShowDeleteModal(false)} onConfirm={() => handleDeleteConfirm(lodging ? lodging.id : null)} />

    </div>

  )

}

export default LodgingDashboard
