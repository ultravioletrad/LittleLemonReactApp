import React from 'react';


const BookingSlot = ({ time, availability }) => {
  return (
    <div className="booking-slots-container">
      <div className="booking-slot">
      <p className="booking-slot-time">{time}</p>
      <p className="booking-slot-availability">{availability}</p>
      </div>
    </div>
  );
};

export default BookingSlot;
