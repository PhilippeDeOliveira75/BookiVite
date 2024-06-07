import './home.scss';
import { useState } from 'react';
import { SearchBar, Filter, LodgingCard, PopularCard, ActivityCard, Sort } from '@components/import.jsx';
import Graph from '@assets/logo/graph.svg';
import { LodgingCaller } from '@services/import.jsx';

function Home() {
  
  const { lodgings, loading, error } = LodgingCaller();
  const [sortBy, setSortBy] = useState('name')

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  const sortedLodgings = lodgings.slice().sort((a, b) => {
    if (sortBy === 'prix') {
      // Pour trier par prix croissant
      return a.price - b.price;
    } else if (sortBy === '-prix') {
      // Pour trier par prix décroissant
      return b.price - a.price;
    } else if (sortBy === 'note') {
      // Pour trier par note
      return b.rating - a.rating;
    } else {
      // Par défaut, trier par nom
      const nameA = a.title || ''; // Si 'title' est undefined, utilisez une chaîne vide ''
      const nameB = b.title || ''; // Si 'title' est undefined, utilisez une chaîne vide ''
      return nameA.localeCompare(nameB);
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className='w-title'>
        <h1> Trouvez votre hébergement pour des vacances de rêves </h1>
        <p>En plein centre-ville ou en pleine nature</p>
      </div>

      < SearchBar />

      <span className="w-iconsParagraph">
        <div className='w-icons'>
          <i className="fa-regular fa-circle circle-icon"></i>
          <i className="fa-solid fa-info info-icon"></i>
        </div>
        <p>Plus de 500 logements sont disponibles dans cette ville</p>
      </span>

      <div className='filterContainer'>
        < Filter />
      </div>

      <div>
        <Sort onChange={handleSortChange} />
      </div>

      <div id='hebergements' className='w-LodgingCardAndPopularCard'>
        <section className='titleAndLodgingCardContainer'>
          <div className='w-titleAndLodingCard'>
            <h2> Hebergements à Marseille </h2>
            <div className="w-LodgingCard">
              <LodgingCard lodgings={sortedLodgings} />
            </div>
          </div>
          <button>Afficher plus</button>
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

      <section id='activity' className='activityCardContainer'>
        <ActivityCard />
      </section>
    </>
  );
}

export default Home;