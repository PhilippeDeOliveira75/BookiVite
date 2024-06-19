import './activityCard.scss';
import { useState } from 'react';
import chevronRight from '@assets/logo/ChevronRight.svg';
import chevronLeft from '@assets/logo/ChevronLeft.svg';

const ActivityCard = ({ activities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length);
  };

  if (!activities || activities.length === 0) {
    return <p>Loading activities...</p>;
  }

  const visibleActivities = [
    activities[currentIndex],
    activities[(currentIndex + 1) % activities.length],
    activities[(currentIndex + 2) % activities.length],
    activities[(currentIndex + 3) % activities.length],
  ].filter(activity => activity);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        <img src={chevronLeft} alt="Previous" />
      </button>
      <div className="carousel-container">
        {visibleActivities.map((activity, index) => (
          <article className="activityCard" key={index}>
            <img className="activityCardImg" src={activity.cover} alt={`Image de ${activity.title}`} />
            <h3>{activity.title}</h3>
          </article>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        <img src={chevronRight} alt="Next" />
      </button>
    </div>
  );
};

export default ActivityCard;