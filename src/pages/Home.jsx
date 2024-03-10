import React, { useState } from 'react';
import './Home.css';
import Nav from "../components/Nav.jsx";
import ImageSlider from '../components/ImageSlider.jsx';
import EventCard from '../components/EventCard.jsx';

const Home = () => {
  const [slides, setSlides] = useState([
    {url: "https://mytickets.lk/contents/events/poster/Aluth%20kalawak%20event%20banner.jpg", header: "bravo"},
    {url: "https://pbs.twimg.com/media/DbE6yNvUwAAVucH.jpg:large", header: "bravo"},
  ]);

  return (
    <div>
      <Nav />
      
      <ImageSlider slides={slides}/>

      <div className='home--musical'>
        <h1>Musical Events</h1>
        
        <div className='home--musical-cards'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  )
}

export default Home
