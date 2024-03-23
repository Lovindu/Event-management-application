import React, { useState } from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search.png';
import searchClear from '../assets/searchClear.png';
import logo from '../assets/LOGO.png';
import user from '../assets/user.png';

function Nav() {
    const [search, setSearch] = useState('');
    const [session, setSession] = useState(true);
    const [username, setUsername] = useState("jonny");

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const clearSearch = () => {
        setSearch('')
    }

  return (
    <div className='navbar'>
        <div className='navbar-row1'>
            <div>
                <Link to="/"><img src={logo} alt="logo" className='nav-logo'/></Link>
            </div>

            <div className='navbar-search'>
                <img src={searchIcon} alt="searchicon" className='nav-search-icon'/>
                <input 
                    type="text" 
                    name='search' 
                    placeholder='Search' 
                    onChange={handleChange} 
                    value={search}/>
                    
                {search ? <img src={searchClear} alt="clear btn" className='nav-search-clear'onClick={clearSearch}/> : <></>}
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
            <a><Link to="/">Home</Link></a>
            <a><Link to="/search">Search</Link></a>
            <a><Link to="/events">Events</Link></a>
            <a><Link to="/schedule">Schedule</Link></a>
            <a><Link to="/contactus">Contact Us</Link></a>
        </div>
        
    </div>
  )
}

export default Nav