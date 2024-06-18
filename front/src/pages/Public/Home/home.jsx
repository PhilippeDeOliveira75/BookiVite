import './home.scss';
import { useState, useEffect } from 'react';
import { SearchBar, Style, Sort, LodgingCard, PopularCard, ActivityCard } from '@components/import.jsx';
import Graph from '@assets/logo/graph.svg';
import ApiCaller from '@services/apiCaller'
import { useNavigate } from 'react-router-dom';
import { Filter } from '@utils/import.jsx';  

function Home() {

  const navigate = useNavigate()

  const [allLodgings, setAllLodgings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [popularLodgings, setPopularLodgings] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [style, setStyle] = useState(false)
    const [sortBy, setSortBy] = useState('name')

  const [filteredLodgings, setFilteredLodgings] = useState([])


  useEffect(() => {

    ApiCaller.getAllLodgings()
    
      .then((response) => {
        setAllLodgings(response);
        setPopularLodgings(response);
        setLoading(false);
      })

      .catch((err) => {
        setError(err);
        setLoading(false);
      })

  }, [])


  useEffect(() => {
    
    setFilteredLodgings ( Filter (allLodgings, searchTerm, style, sortBy) )

  }, [searchTerm, style, sortBy, allLodgings])

  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchTerm(input)
  }

  const handleCardClick = (id) => {
    navigate(`/lodging/${id}`)
  }


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (

    <>
      <div className='w-title'>
        <h1> Trouvez votre hébergement pour des vacances de rêves </h1>
        <p>En plein centre-ville ou en pleine nature</p>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />

      <span className="w-iconsParagraph">
        <div className='w-icons'>
          <i className="fa-regular fa-circle circle-icon"></i>
          <i className="fa-solid fa-info info-icon"></i>
        </div>
        <p>Plus de 500 logements sont disponibles dans cette ville</p>
      </span>

      <div className='filterContainer'>
        <Style setStyle={setStyle} style={style}/>
      </div>

      <Sort  onSortChange={setSortBy}/>

      <div id='hebergements' className='w-LodgingCardAndPopularCard'>
        <section className='titleAndLodgingCardContainer'>
          <div className='w-titleAndLodingCard'>
            <h2> Nos hébergements </h2>
            {filteredLodgings.length === 0 ? (
              <p className='noLodingsFoundMessage'> Aucun logement trouvé. </p>
            ) : (
              <div className="w-LodgingCard">
                <LodgingCard lodgings={filteredLodgings} onCardClick={handleCardClick} />
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
            <PopularCard lodgings={popularLodgings} />
          </div>
        </aside>
      </div>

      <section className='activityCardContainer'>
        <ActivityCard />
      </section>
    </>
  );
}

export default Home