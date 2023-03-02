
import React, { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import restaurant from "./icons_assets/restaurant.jpg";
import chef from "./icons_assets/restaurant chef B.jpg"
import food from "./icons_assets/restauranfood.jpg"
import './BookingPage.css';

const BookingPage = ({ submitForm, state, dispatch, availableTimes, setAvailableTimes }) => {
  console.log(submitForm);
  console.log(state);
  console.log(dispatch);
  console.log(availableTimes);
  console.log(setAvailableTimes);

  const [bookingSlots, setBookingSlots] = useState([
    { time: '12:00 PM', availability: 'Available' },
    { time: '1:00 PM', availability: 'Booked' },
    { time: '2:00 PM', availability: 'Available' },
    { time: '3:00 PM', availability: 'Booked' },
    { time: '4:00 PM', availability: 'Available' },
  ]);
  const [showBookingSlots, setShowBookingSlots] = useState(false);
  const toggleBookingSlots = () => {
    setShowBookingSlots(!showBookingSlots);
  }
  
  return (
    <div className="bookingpage-container">
      <div className="booking-page">
        <div className="booking-form">
        <h1>For reservation fill the form below!</h1>  
        <BookingForm 
          state={state} 
          dispatch={dispatch} 
          availableTimes={availableTimes} 
          setAvailableTimes={setAvailableTimes} 
          submitForm={submitForm}
          />
          </div>
        <div className="menu-item">
                <img src={restaurant} alt="dish1" className="menu-item-image" />
                <img src={chef} alt="dish1" className="menu-item-image" />
                <img src={food} alt="dish1" className="menu-item-image" />
                </div>
        <h2>
          Booking Slots{" "}
          <button className="toggle-booking-slots" aria-label="On Click" onClick={toggleBookingSlots}>
            {showBookingSlots ? "Hide" : "Show"}
          </button>
        </h2>
        <div className={`booking-slot-list ${showBookingSlots ? 'show' : 'hide'}`}>
          {bookingSlots.map((slot, index) => (
            <BookingSlot key={index} time={slot.time} availability={slot.availability} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
