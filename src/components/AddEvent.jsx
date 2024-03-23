import React, { useEffect, useState } from 'react';
import plus from '../assets/plus.png';

const AddEvent = () => {
  const [noOfTicketTypes, setNoOfTicketTypes] = useState(0);

  const numberOfTickets = () => {
    setNoOfTicketTypes(noOfTicketTypes + 1)
  }

  return (
    <div className='add-event'>
      {/* Category, Terms, about, date, event banner, event poster, event name, location(in text), google maps location, time */}

      {/* Ticket types, ticket prices, starting ticket number, ending ticket number */}
      <h1>Event Request</h1>

      <div className='add-event-form'>
        <div>
          <p>Event Name</p>
          <input type="text" placeholder='Enter your event name' name='eventName'/>
        </div>

        <div>
          <p>Event Date</p>
          <input type="date" name='eventDate'/>
        </div>

        <div>
          <p>Category</p>
          <select name="eventCategory" id="">
            <option value="">Select event category</option>
            <option value="Comedy show">Comedy show</option>
            <option value="Musical">Musical</option>
            <option value="Workshop">Workshop</option>
            <option value="Performance">Performance</option>
            <option value="Coference">Coference</option>
            <option value="Award show">Award show</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <p>Starting Time</p>
          <input type="time"/>
        </div>

        <div>
          <p>About</p>
          <textarea name="eventAbout" id="" cols="70" rows="10"></textarea>
        </div>

        <div>
          <p>Location(In text)</p>
          <input type="text" placeholder='Enter event location' name='locationText'/>
        </div>

        <div>
          <p>Location (Google maps link)</p>
          <input type="text" placeholder='Enter google maps location' name='locationLink'/>
        </div>
      </div>

      <div className='add-event-tickets'>
        <h3>Add Ticket types</h3>
        
        <AddTicketType />

        <div className='add-event-tickets-plus'>
          <p>Add another ticket type</p>
          <button onClick={numberOfTickets}><img src={plus} alt="add icon" /></button>
        </div>
        
      </div>

      <button className='add-event-request'>Request to post the event</button>

    </div>
  )
}

export default AddEvent

const AddTicketType = () => {
  return (
    <div className='add-event-tickets-form'>
    <div>
      <p>Ticket type name</p>
      <input type="text" placeholder='Ticket type name'/>
    </div>

    <div>
      <p>Ticket price</p>
      <input type="number" placeholder='Price'/>
    </div>

    <div>
      <p>Starting Ticket number</p>
      <input type="number" placeholder='Starting number of the tickets'/>
    </div>
    
    <div>
      <p>Ending Ticket Number</p>
      <input type="number" placeholder='Ending ticket number'/>
    </div>
  </div>
  )
}