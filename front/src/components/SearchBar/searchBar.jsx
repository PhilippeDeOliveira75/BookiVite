import './searchBar.scss'

function SearchBar ({ searchTerm, onSearchChange, onClearSearch }) {

    return (

        <div className="w-searchBar">
            <i className="location-icon fa-solid fa-location-dot"></i>
            <input type="text" name="localisation" id="localisation" placeholder="Rechercher un logement" aria-label='localisation' value={searchTerm}onChange={onSearchChange} />
            {searchTerm && (
                <button className="clearButton" onClick={onClearSearch}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            )}

            <button type="submit">Rechercher</button>

        </div>

    )
}

export default SearchBar
