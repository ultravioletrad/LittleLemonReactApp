
import React, { useReducer } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import About from "../About";
import Menu from "../Menu";
import OrderOnline from "../OrderOnline";
import Login from "../Login";
import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Reservations from '../Reservations'





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
      case 'updateTimes':
        return {
          ...state,
          selectedDate: action.selectedDate,
          availableTimes: availableTimes
        };
      default:
        return state;
    }
  }
  
  function initializeTimes(selectedDate) {
    return {
      type: "UPDATE_TIMES",
      selectedDate,
      availableTimes
    };
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
        <Route path="/Reservations" element={<BookingForm state={state} dispatch={dispatch} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
      </Routes>
    </main>

  );
};

export default Main;
