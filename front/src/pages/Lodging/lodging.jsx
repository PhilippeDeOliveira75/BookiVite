import './lodging.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ApiCaller from '@services/apiCaller';

function Lodging() {
  const { id } = useParams();
  const [lodging, setLodging] = useState(null);

  useEffect(() => {
    const fetchLodging = async () => {
      try {
        const { data } = await ApiCaller.getLodgingById(id)
        setLodging(data)
      } catch (error) {
        console.error('Error fetching lodging:', error);
      }
    };

    fetchLodging();
  }, [id]);

  if (!lodging) return <p>Logement non trouvé</p>;

  return (
    <div>
      <h1>{lodging.title}</h1>
      <img src={lodging.cover} alt={`Image of ${lodging.title}`} />
      <p>Prix par nuit: {lodging.price}€</p>
      <p>Note: {lodging.rating}</p>
    </div>
  );
}

export default Lodging;
