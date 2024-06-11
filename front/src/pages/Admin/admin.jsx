import './admin.scss';
import { useState, useEffect } from 'react';
import { LodgingCaller } from '@services/import';
import { LodgingCard, SearchBar } from '@components/import';
import { useNavigate } from 'react-router-dom';
import { ModalCreate } from '@components/import';
import ApiCaller from '@services/apiCaller';


function Admin() {
    
    const { lodgings, loading, error } = LodgingCaller();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLodgings, setFilteredLodgings] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!searchTerm && lodgings) {
        setFilteredLodgings(lodgings);
      }
    }, [lodgings, searchTerm]);
  
    const handleSearch = (event) => {
      const input = event.target.value;
      setSearchTerm(input);
    };
  
    const handleFilter = (filtered) => {
      if (JSON.stringify(filteredLodgings) !== JSON.stringify(filtered)) {
        setFilteredLodgings(filtered);
      }
    };
  
    const handleCardClick = (id) => {
      navigate(`/lodgingDashboard/${id}`);
    };
  
    const reloadLodgings = async () => {
      try {
        const response = await ApiCaller.getAllLodgings();
        console.log('Logements rechargés avec succès !');   
        setFilteredLodgings(response);
      } catch (error) {
        console.error('Erreur lors du rechargement des logements :', error);
      }
    };
  
    const addLodging = async (lodgingData) => {
      try {
        const response = await ApiCaller.addLodging(lodgingData);
        await reloadLodgings();
        setShowCreateModal(false);
        console.log('Logement ajouté avec succès !');
      } catch (error) {
        console.error('Erreur lors de l\'ajout du logement :', error);
      }
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <div className='w-adminTitle'>
          <h1 className="adminTitle">Dashboard Admin</h1>
        </div>
  
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
          lodgings={lodgings}
          onFilter={handleFilter}
        />
  
        <div className="w-lodgingAdminCard">
          <div className='w-newLodgingCard' onClick={() => setShowCreateModal(true)}>
            <i className="fa fa-plus iconPlus"></i>
          </div>
  
          <LodgingCard 
            lodgings={filteredLodgings} 
            onCardClick={handleCardClick} 
          />
        </div>
  
        <ModalCreate
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          addLodging={addLodging}
        />
      </div>
    );
  }
  
  export default Admin;