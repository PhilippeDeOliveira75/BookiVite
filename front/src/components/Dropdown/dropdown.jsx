import React, { useState } from 'react'
import './dropdown.scss'
import Vector from './vector.svg'

function Dropdown () {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Choisissez une ville")
    const selection = ["Appartement", "Maison", "Villa", "Chambre d'hôtes", "Gîte", "Hôtel", "Camping", "Auberge de jeunesse", "Résidence étudiante", "Résidence hôtelière", "Résidence de tourisme", "Village vacances", "Mobil-home", "Bateau", "Yourte", "Chalet", "Tipi", "Igloo", "Cabane", "Roulotte", "Tente", "Camping-car", "Autre"]

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false)
    };

    return (

        <div className="dropDownDiv">
            <div className="buttonDiv" onClick={toggleDropdown}>
                <h2 className="buttonTitle">{selectedItem}</h2> 
                <img className="vector" src={Vector} alt="Vector" style={{transform: isOpen ? 'rotate(180deg)' : 'none'}} />
            </div>
            
            <div className="w-categoryList" style={{display: isOpen ? 'block' : 'none'}}>
                <ul className="categoryList">
                    {selection.map((item, index) => (
                        <li key={index} className="itemList" onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown