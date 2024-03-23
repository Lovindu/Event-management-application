import React from 'react';
import '../pages/Profile.css';
import userimg from '../assets/user.png'

const AccountDetails = () => {
  return (
    <div className='account-details'>
        {/* address, email, nic, usertype, organization, contact number, userimage  */}

        <img src={userimg} alt="profile-image" />

        <div className='account-details-dt'>
            <div>
                <h4>Name</h4>
                <p>name</p>
            </div>

            <div>
                <h4>Email</h4>
                <p>mail@gmail.com</p>
            </div>

            <div>
                <h4>NIC</h4>
                <p>11246894385</p>
            </div>

            <div>
                <h4>Address</h4>
                <p>10/b, adderss</p>
            </div>

            <div>
                <h4>Contact Number</h4>
                <p>0711234567</p>
            </div>

            <div>
                <h4>User Type</h4>
                <p>Customer</p>
            </div>
        </div>
        
        <button>Edit</button>
    </div>
  )
}

export default AccountDetails