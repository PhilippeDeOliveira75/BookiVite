import './starRating.scss'

function StarRating ({ rating }) {

    const renderStars = () => {

        const stars = []

        for (let i = 0; i < 5; i++) {

            if (i < rating) {

                stars.push(<i key={i} className="fullStar fa-xs fa-solid fa-star" aria-hidden="true"></i>);
            
            } else {

                stars.push(<i key={i} className="emptyStar fa-xs fa-solid fa-star" aria-hidden="true"></i>);
           
            }
        }

        return stars

    }

    return (

        <div className="star-rating">

            {renderStars()}

        </div>
        
    )

}

export default StarRating
