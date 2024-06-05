import './filter.scss';
import Economic from '@assets/logo/economic.svg';
import Family from '@assets/logo/family.svg';
import Romantic from '@assets/logo/romantic.svg';
import Animals from '@assets/logo/animals.svg';

function Filter() {

  return (

    <section className='filter-section'>

      <h2>Filtres</h2>

      <ul className='filterList'>

        <li className='filterListPuce'>
          <img className='filterLogo' src={Economic} alt="Economic" />
          <span>Économique</span>
        </li>

        <li className='filterListPuce'>
          <img className='filterLogo' src={Family} alt="Family" />
          <span>Familial</span>
        </li>

        <li className='filterListPuce'>
          <img className='filterLogo' src={Romantic} alt="Romantic" />
          <span>Romantique</span>
        </li>

        <li className='filterListPuce'>
          <img className='filterLogo' src={Animals} alt="Animals" />
          <span>Animaux autorisés</span>
        </li>
        
      </ul>

    </section>
    
  )

}

export default Filter;
