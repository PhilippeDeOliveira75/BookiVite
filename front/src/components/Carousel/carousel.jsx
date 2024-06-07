import './i'
import { useState } from 'react';
import chevronRight from '@assets/logo/ChevronRight.webp';
import chevronLeft from '@assets/logo/ChevronLeft.webp';

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const itemCount = items.length;

  const chevronNext = () => {
    setIndex((prevIndex) => (prevIndex === itemCount - 1 ? 0 : prevIndex + 1));
  };

  const chevronPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? itemCount - 1 : prevIndex - 1));
  };

  return (
    <div className="row-carousel">
      <div className="w-carousel">
        {items.map((item, i) => (
          <img
            key={i}
            className={`carouselImg carouselImg-${i} ${i === index ? 'active' : ''}`}
            src={item.image}
            alt={`Image de ${item.nom}`}
            onError={(e) => e.target.style.display = 'none'}
          />
        ))}

        {itemCount > 1 && (
          <>
            <div className="carouselChange">
              <div className="previous" onClick={chevronPrevious}>
                <img className="imgChevron" src={chevronLeft} alt="Chevron left" />
              </div>
              <div className="next" onClick={chevronNext}>
                <img className="imgChevron" src={chevronRight} alt="Chevron right" />
              </div>
            </div>

            <div className="number">
              {`${index + 1} / ${itemCount}`}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
