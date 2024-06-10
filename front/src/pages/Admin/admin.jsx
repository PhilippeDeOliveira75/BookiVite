import './admin.scss';
import { useState, useEffect } from 'react';
import { LodgingCaller } from '@services/import';
import { LodgingCard, SearchBar } from '@components/import';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const { lodgings, loading, error } = LodgingCaller();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLodgings, setFilteredLodgings] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (event) => {
        const input = event.target.value;
        setSearchTerm(input);
    };

    const handleFilter = (filtered) => {
        if (JSON.stringify(filteredLodgings) !== JSON.stringify(filtered)) {
            setFilteredLodgings(filtered);
        }
    };

    useEffect(() => {
        if (!searchTerm && lodgings) {
            setFilteredLodgings(lodgings);
        }
    }, [lodgings, searchTerm]);

    const handleCardClick = (id) => {
        navigate(`/lodgingDashboard/${id}`);
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
                <div className='w-newLodgingCard'>
                    <i className="fa fa-plus iconPlus"></i>
                </div>

                <LodgingCard 
                    lodgings={filteredLodgings} 
                    onCardClick={handleCardClick} 
                />
            </div>
        </div>
    );
}

export default Admin;
