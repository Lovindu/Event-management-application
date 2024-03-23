import React from 'react'

const PendingReq = () => {
  return (
    <div className='pendingreq-card'>
        <h1>Your pending event requests</h1>

        <RequestItem />
    </div>
  )
}

export default PendingReq

const RequestItem = () => {
    return(
        <div className='booking-item'>
      <div>
        <h4>Event name</h4>
        <p>Date</p>
        <p>Venue</p>
      </div>

      <div>
        <h4>No of tickets types</h4>
        <p>2</p>
      </div>

      <div>
        <h4>Request ID</h4>
        <p>1112</p>
      </div>

        <div>
            <button>Delete</button>

            <button>See more</button>
        </div>    
    
    </div>
    )
}