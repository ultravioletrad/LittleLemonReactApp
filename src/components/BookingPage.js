
import React, { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import restaurant from "./icons_assets/restaurant.jpg";
import chef from "./icons_assets/restaurant chef B.jpg"
import food from "./icons_assets/restauranfood.jpg"
import './BookingPage.css';

const BookingPage = (props) => {
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
        <form className="booking-form">
          <BookingForm />
        </form>
        <div className="menu-item">
                <img src={restaurant} alt="dish1" className="menu-item-image" />
                <img src={chef} alt="dish1" className="menu-item-image" />
                <img src={food} alt="dish1" className="menu-item-image" />
                </div>
        <h2>
          Booking Slots{" "}
          <button className="toggle-booking-slots" onClick={toggleBookingSlots}>
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
