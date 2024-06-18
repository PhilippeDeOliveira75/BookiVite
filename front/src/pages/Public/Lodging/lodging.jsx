import './lodging.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ApiCaller from '@services/apiCaller'
import { LodgingDetails } from '@components/import'

function Lodging() {

  const { id } = useParams()
  const [lodging, setLodging] = useState(null)

  useEffect(() => {

    const fetchLodging = async () => {

      try {

        const { data } = await ApiCaller.getLodgingById(id)
        setLodging(data)

      } 
      
      catch (error) {
        console.error('Error fetching lodging:', error)
      }

    }

    fetchLodging()

  }, [id])

  return (

    <div className="lodging-container">

      {lodging ? (
        <LodgingDetails lodging={lodging} />
      ) : (
        <p>Chargement...</p>
      )}

    </div>
  
  )
  
}

export default Lodging
