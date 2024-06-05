import './activityCard.scss';
import React, { useState } from 'react';
import chevronRight from '@assets/logo/ChevronRight.svg';
import chevronLeft from '@assets/logo/ChevronLeft.svg';
import { VieuxPort, FortDePomegues, ParcNationalDesCalanques, NotreDameDeLaGarde, ÎlesduFrioul, ParcLonchamp } from '@assets/activitys/import.jsx';

const activitys = [
  { nom: "Vieux-Port", image: VieuxPort },
  { nom: "Fort de Pomègues", image: FortDePomegues },
  { nom: "Parc national des Calanques", image: ParcNationalDesCalanques },
  { nom: "Notre-Dame-de-la-Garde", image: NotreDameDeLaGarde },
  { nom: "Îles du Frioul", image: ÎlesduFrioul },
  { nom: "Parc Lonchamp", image: ParcLonchamp },
];

function ActivityCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activitys.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activitys.length) % activitys.length);
  };

  const visibleActivities = [
    activitys[currentIndex],
    activitys[(currentIndex + 1) % activitys.length],
    activitys[(currentIndex + 2) % activitys.length],
    activitys[(currentIndex + 3) % activitys.length],
  ];

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        <img src={chevronLeft} alt="Previous" />
      </button>
      <div className="carousel-container">
        {visibleActivities.map((activite, index) => (
          <article className="activityCard" key={index}>
            <img className="activityCardImg" src={activite.image} alt={`Image de ${activite.nom}`} />
            <h3>{activite.nom}</h3>
          </article>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        <img src={chevronRight} alt="Next" />
      </button>
    </div>
  );
}

export default ActivityCard;
