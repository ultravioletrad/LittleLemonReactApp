import React, { useReducer } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import About from "../About";
import Menu from "../Menu";
import OrderOnline from "../OrderOnline";
import Login from "../Login";
import BookingPage from "./BookingPage";
import BookingFormConfirmation from "./BookingFormConfirmation";
import Nav from "./Nav";
import Reservations from '../Reservations'
import { fetchAPI, submitAPI } from "./Api.js";
import { useNavigate } from "react-router-dom";

const Main = () => {
  
  const [availableTimes, setAvailableTimes] = useState([
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30"
  ]);
  const initialState = {
    selectedDate: "",
    availableTimes: availableTimes
  };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes("default date"));


  function initializeTimes() {
    const today = new Date();
    const availableTimes = fetchAPI(today);
    return {
      type: "UPDATE_TIMES",
      selectedDate: today.toLocaleDateString(),
      availableTimes
    };
  }
  
  function updateTimes(state = {}, action = {}) {
    const { selectedDate, type } = action;
    const { availableTimes } = state;
    
    switch (type) {
      case 'UPDATE_TIMES':
        return {
          ...state,
          selectedDate,
          availableTimes: fetchAPI(new Date(selectedDate))
        };
      default:
        return state;
    }
  }
  
  const navigate = useNavigate();
  
  function submitForm(formData) {
    submitAPI(formData)
      .then(response => {
        if (response) {
          navigate('/BookingFormConfirmation');
        } else {
          throw new Error('Failed to submit form');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  console.log("availableTimes:", availableTimes);
  console.log("dispatch:", dispatch);
  console.log("setAvailableTimes:", setAvailableTimes);
  console.log("state:", state);
  console.log("submitForm:", submitForm);
  

  return (
    
    <main className="App">
      <div data-testid="main-component">This is the Main component.</div>;
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reservations" element={<BookingPage submitForm={submitForm} state={state} dispatch={dispatch} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}/>
        <Route path="/BookingConfirmation" element={<BookingFormConfirmation />} />
      </Routes>
    </main>
  );
};

export default Main;
export { updateTimes };