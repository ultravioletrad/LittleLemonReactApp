import React from 'react';
import { Link } from 'react-router-dom';

function BookingFormConfirmation({ values }) {
  return (
    <div>
      <h2>Booking has been confirmed</h2>
      <p>Here are the details of your booking:</p>
      <ul>
        <li>Name: {values.firstName} {values.lastName}</li>
        <li>Email: {values.email}</li>
        <li>Date: {values.date}</li>
        <li>Time: {values.time}</li>
        <li>Occasion: {values.occasion}</li>
        <li>Guests: {values.guests}</li>
      </ul>
      <Link to="/">Go back to booking form</Link>
    </div>
  );
}

export default BookingFormConfirmation;