import { useEffect, useState } from 'react'
import ApiCaller from '@services/apiCaller'

function LodgingCaller () {

    const [lodgings, setLodgings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLodgings = async () => {
            try {
                const data = await ApiCaller.getAllLodgings();
                setLodgings(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLodgings()

    }, [])

    return { lodgings, loading, error }
}

export default LodgingCaller
