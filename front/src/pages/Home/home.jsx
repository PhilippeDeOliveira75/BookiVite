import './home.scss';
import { SearchBar, Filter, LodgingCard, PopularCard, ActivityCard } from '@components/import.jsx';
import Graph from '@assets/logo/graph.svg';
import { LodgingCaller } from '@services/import.jsx';

function Home() {
  
  const { lodgings, loading, error } = LodgingCaller()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className='w-title'>
        <h1> Trouvez votre hébergement pour des vacances de rêves </h1>
        <p>En plein centre-ville ou en pleine nature</p>
      </div>

      <SearchBar />

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

      <div id='hebergements' className='w-LodgingCardAndPopularCard'>
        <section className='titleAndLodgingCardContainer'>
          <div className='w-titleAndLodingCard'>
            <h2> Hebergements à Marseille </h2>
            <div className="w-LodgingCard">
              <LodgingCard lodgings={lodgings} />
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