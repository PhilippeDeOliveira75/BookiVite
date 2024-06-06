import './searchBar.scss'

function SearchBar ({ searchTerm, onSearchChange }) {

    return (

        <div className="w-searchBar">
            <i className="location-icon fa-solid fa-location-dot"></i>
            <input type="text" name="localisation" id="localisation" placeholder="Rechercher un logement" aria-label='localisation' value={searchTerm} onChange={onSearchChange} />
            <button type="submit">Rechercher</button>
        </div>

    )
}

export default SearchBar