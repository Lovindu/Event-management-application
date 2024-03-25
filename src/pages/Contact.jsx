import React from 'react';
import Nav from '../components/Nav';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Nav />
      
      <div className='contact'>
        <h2>Contact Us</h2>

          <div>
            <p>Reason</p>
            <input type="text" name='reason'/>
          </div>


          <div className='contact-mid'>
            <div>
              <p>Name (name of your organization)</p>
              <input type="text" name='name'/>
            </div>
            
            <div>
              <p>Email</p>
              <input type="email" name='email'/>
            </div>
            
            <div>
              <p>Contact Number</p>
              <input type="text" name='contact'/>
            </div>
          </div>

          <div>
            <p>Subject</p>
            <textarea name="subject" id="" cols="30" rows="10"></textarea>
          </div>

          <button>Submit</button>
        </div>

    </div>
  )
}

export default Contact
