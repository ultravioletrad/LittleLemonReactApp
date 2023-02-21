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
  const [state, dispatch] = useReducer(updateTimes, initialState,() =>
  initializeTimes("default date"));

  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const availableTimes = fetchAPI(new Date(action.selectedDate));
        return {
          ...state,
          selectedDate: action.selectedDate,
          availableTimes
        };
      default:
        return state;
    }
  }
  

  function initializeTimes(selectedDate) {
    const today = new Date(selectedDate);
    const formattedDate = today.toLocaleDateString();
    const availableTimes = fetchAPI(today);
    return {
      type: "UPDATE_TIMES",
      selectedDate: formattedDate,
      availableTimes
    };
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
  

  return (
    <main className="App">
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
