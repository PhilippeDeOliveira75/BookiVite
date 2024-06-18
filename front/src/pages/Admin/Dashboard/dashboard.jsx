import './dashboard.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiCaller from '@services/apiCaller'
import { LodgingCard, SearchBar, ModalCreate } from '@components/import'


function Dashboard () {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredLodgings, setFilteredLodgings] = useState([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [addFlag, setAddFlag] = useState(false)
  
  useEffect(() => {

    ApiCaller.getAllLodgings()

      .then((response) => {

        if (!searchTerm && response) {

          setFilteredLodgings(response)
          setLoading(false)
        }
      })

      .catch((error) => {

        console.error('Error fetching lodgings:', error)
        setError(true)

      })
      
  }, [searchTerm, addFlag])
  
  function handleSearch (event)  {
    const input = event.target.value
    setSearchTerm(input)
  }
  
  function handleFilter (filtered) {
    if (JSON.stringify(filteredLodgings) !== JSON.stringify(filtered)) {
       setFilteredLodgings(filtered)
    }
  }

  function handleCardClick (id) {
    navigate(`/admin/lodgingDashboard/${id}`)
  }
  
  
  async function addLodging (lodgingData) {

      try {

        const response = await ApiCaller.addLodging(lodgingData)
        setAddFlag(!addFlag)
        setShowCreateModal(false)

      } 
      
      catch (error) {
        console.error('Erreur lors de l\'ajout du logement :', error)
      }

  }
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  
  return (

    <div>

      <div className='w-adminTitle'>
          <h1 className="adminTitle">Dashboard Admin</h1>
      </div>
  
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} lodgings={filteredLodgings} onFilter={handleFilter} />
  
      <div className="w-lodgingAdminCard">
        <div className='w-newLodgingCard' onClick={() => setShowCreateModal(true)}>
          <i className="fa fa-plus iconPlus"></i>
        </div>
  
        <LodgingCard lodgings={filteredLodgings}  onCardClick={handleCardClick} />
      </div>
  
      <ModalCreate show={showCreateModal} onClose={() => setShowCreateModal(false)} addLodging={addLodging} />
      
    </div>

  )

}
  
  export default Dashboard