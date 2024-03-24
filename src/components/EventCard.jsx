import React from 'react';
import './EventCard.css';
import img from '../assets/cover.png';
import star from '../assets/Star.png';
import PropTypes from 'prop-types';


const EventCard = ({date, month, rating, image, title, location, click, mainDateDisplay, mainDetailsPadding }) => {
  return (
    <div className='eventcard' onClick={click}>

        <div className='eventcard--main'>

          <div className='eventcard--main-details' style={{ paddingLeft: mainDetailsPadding }}>
            <div className='eventcard--main-date' style={{ display: mainDateDisplay }}>
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
        <p>Rs.{price}</p>
    </div>
   
  )
}
EventCard.propTypes = {
  mainDateDisplay: PropTypes.string.isRequired,
  mainDetailsPadding:PropTypes.string.isRequired,
};

export default EventCard
