import React, { useState } from 'react';
import './Home.css';
import Nav from "../components/Nav.jsx";
import ImageSlider from '../components/ImageSlider.jsx';
import EventCard from '../components/EventCard.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  const [slides, setSlides] = useState([
    {url: "https://mytickets.lk/contents/events/poster/Aluth%20kalawak%20event%20banner.jpg", header: "bravo"},
    {url: "https://pbs.twimg.com/media/DbE6yNvUwAAVucH.jpg:large", header: "bravo"},
  ]);

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
      <Nav />
      
      <ImageSlider slides={slides}/>

      <div className='home--cards-row'>
        <h1>Musical Events</h1>
        
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

      {/* should include trenting searches or trending events */}

      <div className='home--cards-row'>
        <h1>Performences</h1>
        
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
        <h1>Comedy shows</h1>
        
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

      <Footer />
    </div>
  )
}

export default Home
