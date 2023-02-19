import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = ({ values, errors }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Here are the details of your booking:</p>
      <ul>
        <li>
          Name: {values.firstName} {values.lastName}
          {errors.firstName || errors.lastName ? (
            <span> (required)</span>
          ) : null}
        </li>
        <li>
          Email: {values.email}
          {errors.email ? <span> (required)</span> : null}
        </li>
        <li>
          Date: {values.date}
          {errors.date ? <span> (required)</span> : null}
        </li>
        <li>
          Time: {values.time}
        </li>
        <li>
          Occasion: {values.occasion}
          {errors.occasion ? <span> (required)</span> : null}
        </li>
        <li>
          Guests: {values.guests}
          {errors.guests ? <span> (required)</span> : null}
        </li>
      </ul>
      <Link to="/BookingForm">Go back to booking form</Link>
    </div>
  );
};

export default BookingConfirmation;
