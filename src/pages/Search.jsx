import React from 'react'
import { useState } from 'react';
import './Search.css';
import Nav from '../components/Nav'
import EventCard from '../components/EventCard.jsx';
import Footer from '../components/Footer.jsx';

const Search = () => {
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

        <div className="container">
          <div className="filters-left">
            <div className="date-filter">
              <h2>Date</h2>

              <label><input type='radio' name='date' />Today </label>
              <label><input type='radio' name='date' />Tomorrow </label>
              <label><input type='radio' name='date' />This week </label>
              <label><input type='radio' name='date' />This month </label>


            </div>
            <div className="price-filter">
              <h2>Price Range</h2>

              <label><input type='radio' name='price' />Rs.0 - Rs.1000</label>
              <label><input type='radio' name='price' />Rs.1000 - Rs.5000</label>
              <label><input type='radio' name='price' />Above 5000</label>

            </div>
            <button>Clear filters</button>
          </div>
          <div className="home-cards-right">
            <div className='home--cards-row'>

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
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Search
