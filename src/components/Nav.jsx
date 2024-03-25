import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';


import logo from '../assets/LOGO.png';
import user from '../assets/user.png';


function Nav() {

    const [search, setSearch] = useState('');


    
    const [session, setSession] = useState(true);
    const [username, setUsername] = useState("jonny");


    

    useEffect(() => {
        if(sessionStorage.email) {
            setSession(true);
            setUsername((sessionStorage.email.toString().substring(0, 7))+ "....");
        } else {
            setSession(false);
            setUsername("");
        }
    }, [sessionStorage])

  return (
    <div className='navbar'>
        <div className='navbar-row1'>
            <div>
                <Link to="/"><img src={logo} alt="logo" className='nav-logo'/></Link>
            </div>

           
            {session ? 
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div className='user-logged-in'>
                            <img src={user} alt="usericon" />
                            <p>Welcome, {username} !</p>
                        </div> 
                    </Link>
                :
                <div className='navbar-buttons'>
                    <Link to='/login'><button className='nav-btn'>Login</button></Link>
                    <Link to='/signin'><button className='nav-round-btn'>Sign in</button></Link>
                </div>
            }
            
        </div>
        <div className='navbar-row2'>


            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/events">Events</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/contactus">Contact Us</Link>

        </div>
        
    </div>
  )
}

export default Nav