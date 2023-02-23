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
import { Formik, FormikConsumer } from "formik";

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
  const [state, dispatch] = useReducer(updateTimes, initializeTimes(new Date()));
;


  function initializeTimes(defaultDate) {
    const selectedDate = defaultDate || new Date();
    const availableTimes = fetchAPI(selectedDate);
    return {
      type: "UPDATE_TIMES",
      selectedDate: selectedDate.toLocaleDateString(),
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
  const [formData, setFormData] = useState({});
  function submitForm(formData) {
    submitAPI(formData)
      .then(response => {
        if (response) {
          navigate('/BookingFormConfirmation', { state: { formData } });
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
    /* <div data-testid="main-component">This is the Main component.</div>;*/
    <main className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Reservations" element={<BookingPage submitForm={submitForm} state={state} dispatch={dispatch} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}/>
        <Route path="/BookingFormConfirmation" element={<BookingFormConfirmation setFormData={setFormData}/>} />
      </Routes>
    </main>
  );
};

export default Main;
