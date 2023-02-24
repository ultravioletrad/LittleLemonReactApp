import React from "react";
import BookingPage from "./components/BookingPage";
import './Reservations.css'
function Reservations(){
    return(
        <div className="bookingPage">
         <div className="bookingform">
              <h1>For reservation fill the form below!</h1>  
              <BookingPage/>
          </div>
        </div>
    );

}
export default Reservations;