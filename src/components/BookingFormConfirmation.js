import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingFormConfirmation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location?.state?.formData || {};

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="form">
      <span className="title"></span>Booking has been confirmed
      <h1>Here are the details of your booking:</h1>
      
      <div className="form-group">
      <label htmlFor="first-name">
            <span className="label-icon">👤</span>Name: 
          </label> {formData.firstName} {formData.lastName}
          </div>
      <div className="form-group">
          <label htmlFor="email">
            <span className="label-icon">📧</span>Email: 
          </label> {formData.email}
          </div>
      
      <div className="form-group">   
      <label htmlFor="date">
            <span className="label-icon">📅</span>Date: 
            </label>{formData.date}
        </div>
        <div className="form-group">
            <label htmlFor="time">
              <span className="label-icon">🕔</span>Time:
            </label>{formData.time}
           </div>
      <div className="form-group">  
      <label htmlFor="occasion">
          <span className="label-icon">🎉</span>Occasion:
          </label>{formData.occasion}
        </div>
      <div className="form-group">  
      <label htmlFor="guests">
          <span className="label-icon">👥</span>Number of Guests
          </label>{formData.guests}
        </div>
      <button onClick={handleBackButtonClick}>Back to booking form</button>
    </div>
  );
};

export default BookingFormConfirmation;
