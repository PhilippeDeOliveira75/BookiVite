import './home.scss';
import { useState, useEffect, useCallback } from 'react';
import { SearchBar, Filter, LodgingCard, PopularCard, ActivityCard, Sort } from '@components/import.jsx';
import Graph from '@assets/logo/graph.svg';
import { LodgingCaller } from '@services/import.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { lodgings, loading, error } = LodgingCaller();
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLodgings, setFilteredLodgings] = useState([]);
  const navigate = useNavigate();

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
  };

  const handleFilter = useCallback((filtered) => {
    setFilteredLodgings(filtered);
  }, []);

  useEffect(() => {
    if (!searchTerm && lodgings) {
      setFilteredLodgings(lodgings);
    }
  }, [lodgings, searchTerm]);

  const handleCardClick = (id) => {
    navigate(`/lodging/${id}`);
  };

  const sortedLodgings = filteredLodgings.slice().sort((a, b) => {
    if (sortBy === 'prix') {
      return a.price - b.price;
    } else if (sortBy === '-prix') {
      return b.price - a.price;
    } else if (sortBy === 'note') {
      return b.rating - a.rating;
    } else {
      const nameA = a.title || '';
      const nameB = b.title || '';
      return nameA.localeCompare(nameB);
    }
  });

  return (
    <>
      <div className='w-title'>
        <h1> Trouvez votre hébergement pour des vacances de rêves </h1>
        <p>En plein centre-ville ou en pleine nature</p>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} lodgings={lodgings} onFilter={handleFilter} />

      <span className="w-iconsParagraph">
        <div className='w-icons'>
          <i className="fa-regular fa-circle circle-icon"></i>
          <i className="fa-solid fa-info info-icon"></i>
        </div>
        <p>Plus de 500 logements sont disponibles dans cette ville</p>
      </span>

      <div className='filterContainer'>
        <Filter />
      </div>

      <div>
        <Sort onChange={handleSortChange} />
      </div>

      <div id='hebergements' className='w-LodgingCardAndPopularCard'>
        <section className='titleAndLodgingCardContainer'>
          <div className='w-titleAndLodingCard'>
            <h2> Nos hébergements </h2>
            {sortedLodgings.length === 0 ? (
              <p className='noLodingsFoundMessage'> Aucun logement trouvé. </p>
            ) : (
              <div className="w-LodgingCard">
                <LodgingCard lodgings={sortedLodgings} onCardClick={handleCardClick} />
              </div>
            )}
          </div>
        </section>

        <aside className='titleAndPopularCardContainer'>
          <div className="w-titleAndLogo">
            <h2> Les plus populaire </h2>
            <img className='popularLogo' src={Graph} alt="logo graphique" />
          </div>
          
          <div className='w-popularCard'>
            <PopularCard lodgings={lodgings} />
          </div>
        </aside>
      </div>

      <section className='activityCardContainer'>
        <ActivityCard />
      </section>
    </>
  );
}

export default Home;
