import React from 'react';
import './EventCard.css';
import img from '../assets/cover.png';
import star from '../assets/Star.png';

const EventCard = ({date, month, rating, image, title, location}) => {
  return (
    <div className='eventcard'>
        <div className='eventcard--main'>

          <div className='eventcard--main-details'>
            <div className='eventcard--main-date'>
                {date} <br /> {month}
              </div>

              <div className='eventcard--main-rating'>
                <span>{rating}</span>
                <img src={star} alt="ratings-icon" />
              </div>
          </div>

            <img className='eventcard--poster' src={img} alt="event-poster" />
        </div>

        <h3>{title}</h3>
        <p>{location}</p>
    </div>
  )
}

export default EventCard
