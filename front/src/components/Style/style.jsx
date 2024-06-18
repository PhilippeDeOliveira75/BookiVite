import './style.scss'
import Economic from '@assets/logo/economic.svg'
import Family from '@assets/logo/family.svg'
import Romantic from '@assets/logo/romantic.svg'
import Animals from '@assets/logo/animals.svg'

function Style ({ style, setStyle }) {

  const handleFilterClick = (e) => {

    if (style === e) {

      setStyle(false)

      return

    }

    setStyle(e)

  }

  return (

    <section className='filter-section'>

      <h2>Filtres</h2>

      <ul className='filterList'>

        <li className='filterListPuce' onClick={() => handleFilterClick('economique')}>
          <img className='filterLogo' src={Economic} alt='Economic' />
          <span>Économique</span>
        </li>
        
        <li className='filterListPuce' onClick={() => handleFilterClick('familial')}>
          <img className='filterLogo' src={Family} alt='Family' />
          <span>Familial</span>
        </li>

        <li className='filterListPuce' onClick={() => handleFilterClick('romantique')}>
          <img className='filterLogo' src={Romantic} alt='Romantic' />
          <span>Romantique</span>
        </li>

        <li className='filterListPuce' onClick={() => handleFilterClick('animaux autorises')}>
          <img className='filterLogo' src={Animals} alt='Animals' />
          <span>Animaux autorisés</span>
        </li>

      </ul>

    </section>

  )

}

export default Style