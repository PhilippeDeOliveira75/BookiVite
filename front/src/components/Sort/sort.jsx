import './sort.scss';

function Sort({ onChange }) {

    return (
        
      <div className='sortContainer'>
        <div className='w-sort'>
          <h3> Tri par </h3>
          <select className='sort' id='sort' onChange={onChange}>
            <option value='name'>Nom</option>
            <option value='prix'>Prix : Ordre croissant</option>
            <option value='-prix'>Prix : Ordre décroissant</option>
            <option value='note'>Note moyenne</option>
          </select>
        </div>
      </div>
    );
  }
  
  export default Sort;
  