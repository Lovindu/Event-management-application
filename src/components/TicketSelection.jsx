import React from 'react';
import './Tickets.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import arrow from '../assets/arrow.png';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';

const TicketSelection = () => {
  return (
    <div className='ticket-selection'>
        <Nav />

        <Link to='/event'><img src={arrow} alt="back arrow" className='backbtn' /></Link>

        <div className='tickets-select'>
            <div className='ticket-selection-main'>
                <h2>Select preferred ticket</h2>

                <div className='ticket-selection-card'>
                    <div>
                        <input type="radio" name='option1' id='selection'/>
                        <h3>Option 01</h3>
                    </div>

                    <div className='select-tickets-count'>
                        <button className='plus-and-minus'><img src={minus} alt="" /></button>
                        <p>0</p>
                        <button className='plus-and-minus'><img src={plus} alt="" /></button>
                    </div>
                    
                    <h3>rs.1000</h3>
                </div>

                <div className='ticket-selection-card'>
                    <div>
                        <input type="radio" name='option1' id='selection'/>
                        <h3>Option 01</h3>
                    </div>

                    <div className='select-tickets-count'>
                        <button className='plus-and-minus'><img src={minus} alt="" /></button>
                        <p>0</p>
                        <button className='plus-and-minus'><img src={plus} alt="" /></button>
                    </div>
                    
                    <h3>rs.1000</h3>
                </div>

                <div className='ticket-selection-card'>
                    <div>
                        <input type="radio" name='option1' id='selection'/>
                        <h3>Option 01</h3>
                    </div>

                    <div className='select-tickets-count'>
                        <button className='plus-and-minus'><img src={minus} alt="" /></button>
                        <p>0</p>
                        <button className='plus-and-minus'><img src={plus} alt="" /></button>
                    </div>
                    
                    <h3>rs.1000</h3>
                </div>

            </div>

            <div className='ticket-selection-summery'>
                <h2>Ticket Summery</h2>

                <div className='ticket-summery-details'>
                    <div className='ticket-summery-details-top'>
                        <h3>Event name</h3>
                        <p>Wed, 01 Apr, 2025</p>
                        <p>5pm onwards</p>
                        <p>Location</p> 
                    </div>
                    
                    <hr />

                    <div className='ticket-summery-details-bottom'>
                        <div>
                            <p>Option 01</p>
                            <p>1 x Rs.1000</p>
                        </div>

                        <div>
                            <h3>Total</h3>
                            <h4>Rs. 1000</h4>
                        </div>
                    </div>
                </div>

                <button>Proceed to checkout</button>
            </div>
        </div>


    </div>
  )
}

export default TicketSelection