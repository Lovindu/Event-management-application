import React from 'react'
import 'Nav.css';

function Nav() {
  return (
    <div className='navbar'>
        <div className='navbar-row1'>
            <a href=""><img src="" alt="" /></a>

            <div className='navbar-search'>
                <img src="" alt="search-icon" />
                <input type="text" />
            </div>

            <div className='navbar-buttons'>
                <button>LOGIN</button>
                <button>SIGN IN</button>
            </div>
            
        </div>

        <div className='navbar-row2'>
            {/* links */}
        </div>
        
    </div>
  )
}

export default Nav