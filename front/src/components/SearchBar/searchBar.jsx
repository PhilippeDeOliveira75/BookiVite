import './searchBar.scss'
import { useEffect } from 'react';

function SearchBar({ searchTerm, onSearchChange, lodgings, onFilter }) {

    useEffect(() => {
        // Normalisation et filtrage des logements
        const filteredLodgings = lodgings && Array.isArray(lodgings) ? lodgings.filter(lodging =>
            lodging.title.toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(searchTerm.toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, ""))
        ) : [];
        onFilter(filteredLodgings);
    }, [searchTerm, lodgings, onFilter]);

    return (
        <div className="w-searchBar">
            <i className="location-icon fa-solid fa-location-dot"></i>
            <input
                className='searchBar-input'
                type="text"
                name="localisation"
                id="localisation"
                placeholder="Rechercher un logement"
                aria-label='localisation'
                value={searchTerm}
                onChange={onSearchChange}
            />
            <button type="submit">Rechercher</button>
        </div>
    )
}

export default SearchBar