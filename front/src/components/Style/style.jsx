import './style.scss'
import Economic from '@assets/logo/economic.svg'
import Family from '@assets/logo/family.svg'
import Romantic from '@assets/logo/romantic.svg'
import Animals from '@assets/logo/animals.svg'
import { useEffect } from 'react'

function Style({ style, setStyle }) {

  const styleArray = [
    { key: 'economique', label: 'Économique', icon: Economic },
    { key: 'familial', label: 'Familial', icon: Family },
    { key: 'romantique', label: 'Romantique', icon: Romantic },
    { key: 'animaux autorises', label: 'Animaux autorisés', icon: Animals },
  ]

  const handleFilterClick = (key) => {

    let newStyle

    if (Array.isArray(style) && style.includes(key)) {
      newStyle = style.filter((item) => item !== key)
    } 
    
    else if (Array.isArray(style)) {
      newStyle = [...style, key]
    } 
    
    else {
      newStyle = [key]
    }

    setStyle(newStyle)

  }

  useEffect(() => {

  }, [style]);

  return (

    <section className='filter-section'>

      <h2>Filtres</h2>

      <ul className='filterList'>

        {styleArray.map(({ key, label, icon }) => (

          <li key={key} className={`filterListPuce ${Array.isArray(style) && style.includes(key) ? 'active' : ''}`} onClick={() => handleFilterClick(key)} >
            <img className='filterLogo' src={icon} alt={label} />
            <span>{label}</span>
          </li>

        ))}

      </ul>

    </section>

  )

}

export default Style