import React, { useState } from 'react';
import './Search.css';
import Nav from '../components/Nav';
import EventCard from '../components/EventCard.jsx';
import Footer from '../components/Footer.jsx';
import data from './data.js';
import searchIcon from '../assets/search.png';
import searchClear from '../assets/searchClear.png';

const Search = () => {
  const [search, setSearch] = useState('');
  const [cardData, setCardData] = useState(data);


  const searchText = (event) => {
    setSearch(event.target.value);
  };

  const clearSearch = () => {
    setSearch('');
    setCardData(data); // Reset cardData to original data
  };

  const filteredData = cardData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      <div>
        
        <div className='navbar-search'>
          
          <img src={searchIcon} alt='searchicon' className='nav-search-icon' />
          <input
            type='text'
            name='search'
            placeholder='Search'
            onChange={searchText}
            value={search}
          />
          {search ? (
            <img
              src={searchClear}
              alt='clear btn'
              className='nav-search-clear'
              onClick={clearSearch}
            />
          ) : (
            <></>
          )}
        </div>
       
        <Nav />
        <div className='container'>
          <div className="filters-left">
            <div className="date-filter">
              <h2>Date</h2>
              <label><input type='radio' name='date' />Today</label>
              <label><input type='radio' name='date' />Tomorrow</label>
              <label><input type='radio' name='date' />This week</label>
              <label><input type='radio' name='date' />This month</label>
            </div>
            <div className="price-filter">
              <h2>Price Range</h2>
              <label><input type='radio' name='price' />Rs.0 - Rs.1000</label>
              <label><input type='radio' name='price' />Rs.1000 - Rs.5000</label>
              <label><input type='radio' name='price' />Above 5000</label>
            </div>
            <button >Clear filters</button>
          </div>
          <div className="search-cards-right">
            
            {filteredData.map((item, index) => (
              <div className='search--cards-row' key={index}>
                <div className='search--cards'>
                  <EventCard
                    date={item.date}
                    month={item.month}
                    rating={item.rating}
                    image={item.img}
                    title={item.Title}
                    location={item.location}
                    price={item.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
          
      </div>
    </div>
  );
};

export default Search;




