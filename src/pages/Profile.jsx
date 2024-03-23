import React, { useState } from 'react';
import Nav from '../components/Nav';
import './Profile.css';
import AccountDetails from '../components/AccountDetails';
import Bookings from '../components/Bookings';
import Settings from '../components/Settings';
import AddEvent from '../components/AddEvent';
import PendingReq from '../components/PendingReq';

const Profile = () => {
    const [isManager, setIsManager] = useState(true);
    const [currentComponent, setCurrentComponent] = useState("account");

    const changeCurrentComponent = (e) => {
        if(currentComponent != e.target.value) {
            setCurrentComponent(e.target.value);
        }
    }

  return (
    <div className='profile'>
        <Nav />
        <div className='profile-details'>
            <div className='profile-left-navigation'>
                <div>
                    <button onClick={changeCurrentComponent} value="account">Account details</button>
                    <button onClick={changeCurrentComponent} value="history">Booking History</button>
                    <button onClick={changeCurrentComponent} value="settings">Settings</button>
                    {isManager ? <button onClick={changeCurrentComponent} value="add">Add Event</button> : <></>}
                    {isManager ? <button onClick={changeCurrentComponent} value="pending">Pending event requests</button> : <></>}
                </div>
                
                <button className='profile-signout'>Sign out</button>
            </div>

            <div className='profile-right'>
                {
                    currentComponent == "account" ? <AccountDetails /> 
                    : currentComponent == "history" ? <Bookings />
                    : currentComponent == "settings" ? <Settings />
                    : currentComponent == "add" ? <AddEvent />
                    : currentComponent == "pending" ? <PendingReq />
                    : <></>
                }
            </div>
        </div>
        
    </div>
  )
}

export default Profile