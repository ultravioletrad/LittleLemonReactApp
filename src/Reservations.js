import React from "react";
import BookingPage from "./components/BookingPage";
import './Reservations.css'
function Reservations(){
    return(
        <div className="bookingPage">
         <div className="bookingform">
                
              <BookingPage/>
          </div>
        </div>
    );

}
export default Reservations;