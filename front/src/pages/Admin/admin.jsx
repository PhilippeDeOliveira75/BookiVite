import './admin.scss';
import { useState } from 'react';
import { LodgingCaller } from '@services/import';
import StarRating from '@components/StarRating/starRating';
import SearchBar from '@components/SearchBar/searchBar';

function Admin () {

    const { lodgings, loading, error } = LodgingCaller()
    const [searchTerm, setSearchTerm] = useState('')

    const handleDelete = (id) => {
        console.log(`Suppression du logement avec id: ${id}`)
    };

    const handleEdit = (id) => {
        console.log(`Modification du logement avec id: ${id}`)
    };

    const handleClearSearch = () => {
        setSearchTerm('')
    };

    const handleSearch = (event) => {
        const input = event.target.value;
        setSearchTerm(input);
    };

    const filteredLodgings = lodgings.filter(lodging =>
        lodging.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 className="title">Dashboard Admin</h1>

            <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={handleSearch}
                onClearSearch={handleClearSearch}
            />

            <div className="w-LodgingCard">
                <div className='w-newLodgingCard'>
                    <i className="fa fa-plus iconPlus"></i>
                </div>

                {filteredLodgings.map((lodging, index) => (
                    <article className='w-lodgingCard' key={index}>
                        <img className='lodgingCardImg' src={lodging.cover} alt={`Image ${lodging.title}`} />
                        <div className="w-titlePriceAndRating">
                            <h3 className="card-title">{lodging.title}</h3>
                            <p className="card-subtitle">Nuit à partir de {lodging.price}<span className='euro'>€</span></p>
                            <div className='w-ratingAndActions'>  
                                <div className="card-rating">
                                    <StarRating rating={lodging.rating} />
                                </div>
                                <div className="card-actions">
                                    <button onClick={() => handleEdit(lodging.id)} className="iconButton">
                                        <i className="fa fa-pencil" aria-hidden="true"></i>
                                    </button>
                                    <button onClick={() => handleDelete(lodging.id)} className="iconButton">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Admin;
