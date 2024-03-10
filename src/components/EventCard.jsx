import React from 'react';
import './EventCard.css';
import img from '../assets/cover.png';
import star from '../assets/Star.png';

const EventCard = () => {
  return (
    <div className='eventcard'>
        <div className='eventcard--main'>

          <div className='eventcard--main-details'>
            <div className='eventcard--main-date'>
                29 <br /> Feb
              </div>

              <div className='eventcard--main-rating'>
                <span>4.8</span>
                <img src={star} alt="ratings-icon" />
              </div>
          </div>

            <img className='eventcard--poster' src={img} alt="event-poster" />
        </div>

        <h3>Title</h3>
        <p>Location</p>
    </div>
  )
}

export default EventCard
