import { useEffect, useState } from 'react'
import { ApiCaller } from '@services/import'

function LodgingCaller ()  {
    
    const [lodgings, setLodgings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchLodgings = async () => {

        try {

            const data = await ApiCaller.getAllLodgings()
            setLodgings(data)

        } 
        
        catch (error) {

            console.error('Error in LodgingCaller:', error)
            setError(error)
        } 
        
        finally {

        setLoading(false)

        }

    }

    fetchLodgings()

  }, [])

  return { lodgings, loading, error }

}

export default LodgingCaller
