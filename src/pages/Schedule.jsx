import React from 'react'
import { useState } from 'react';
import './Schedule.css';
import Nav from '../components/Nav'
import ImageSlider from '../components/ImageSlider.jsx';
import EventCard from '../components/EventCard.jsx';
import Footer from '../components/Footer.jsx';



const Schedule = () => {


  const [cardData, setCardData] = useState([{
    date: "29",
    month: "Feb",
    rating: "4.8",
    img: "../assets/cover.png",
    Title: "example event",
    location: "colombo",
    category: "musical"
  },
  {
    date: "29",
    month: "Feb",
    rating: "4.8",
    img: "../assets/cover.png",
    Title: "example event",
    location: "colombo",
    category: "musical"
  },
  {
    date: "29",
    month: "Feb",
    rating: "4.8",
    img: "../assets/cover.png",
    Title: "example event",
    location: "colombo",
    category: "musical"
  },
  {
    date: "29",
    month: "Feb",
    rating: "4.8",
    img: "../assets/cover.png",
    Title: "example event",
    location: "colombo",
    category: "musical"
  },
  {
    date: "29",
    month: "Feb",
    rating: "4.8",
    img: "../assets/cover.png",
    Title: "example event",
    location: "colombo",
    category: "musical"
  },]);
  return (
    <div>
     <div>
      <Nav />
      
<div className="content">
      <div className='home--cards-row'>
        <h1>Today</h1>
        
        <div className='home--cards'>
          {cardData.map((item, index) => <EventCard 
            key={index}
            date={item.date}
            month={item.month}
            rating={item.rating}
            image={item.img}
            title={item.Title}
            location={item.location}
          />)}
        </div>
      </div>


      <div className='home--cards-row'>
        <h1>01,April,2024</h1>
        
        <div className='home--cards'>
          {cardData.map((item, index) => <EventCard 
            key={index}
            date={item.date}
            month={item.month}
            rating={item.rating}
            image={item.img}
            title={item.Title}
            location={item.location}
          />)}
        </div>
      </div>

      <div className='home--cards-row'>
        <h1>02,April,2024</h1>
        
        <div className='home--cards'>
          {cardData.map((item, index) => <EventCard 
            key={index}
            date={item.date}
            month={item.month}
            rating={item.rating}
            image={item.img}
            title={item.Title}
            location={item.location}
          />)}
        </div>
      </div>
      </div>

      <Footer />
    </div>
    </div>
  )
}

export default Schedule
