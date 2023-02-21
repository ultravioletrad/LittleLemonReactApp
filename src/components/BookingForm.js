
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookingFormConfirmation from "./BookingFormConfirmation";
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import './BookingForm.css';

const BookingForm = (props) => {
  console.log(props);
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      time: "17:00",
      occasion: "Birthday",
      guests: 1,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      date: Yup.date().required("Required"),
      occasion: Yup.string().required("Required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be 10 or less")
        .required("Required"),
    }),
    onSubmit: (values, { setSubmitted }) => {
      props.submitForm(values);
      console.log("Form submitted with values: ", values);
      setSubmitted(true);
      handleBookingForm();
      
    },
    
    
  });
  const handleBlur = (e) => {
    formik.handleBlur(e);
    if (formik.touched[e.target.name] && !formik.errors[e.target.name]) {
      e.target.classList.remove("error-input");
    } else if (e.target.value.trim() === '') {
      e.target.classList.add("error-input");
    } else {
      e.target.classList.remove("error-input");
    }
    console.log("Field blurred: ", e.target.name);
  };
  
  
  // define submit function
  
  const navigate = useNavigate(); // initialize useNavigate hook
  const handleBookingForm = () => {
    navigate('/BookingFormConfirmation'); 
  };
  
  

  return (
    <div className="form">
    {submitted ? (
      <BookingFormConfirmation handleBookingForm={handleBookingForm} />
    ) : (
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">
            <span className="label-icon">👤</span>First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={handleBlur}/>
          {formik.touched.firstName && formik.errors.firstName ? (
            <span className="error">{formik.errors.firstName}</span>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="last-name">
            <span className="label-icon">👤</span>Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={handleBlur}/>
          {formik.touched.lastName && formik.errors.lastName ? (
            <span className="error">{formik.errors.lastName}</span>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <span className="label-icon">📧</span>Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={handleBlur}/>
          {formik.touched.email && formik.errors.email ? (
            <span className="error">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="date">
            <span className="label-icon">📅</span>Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={handleBlur}/>
          {formik.touched.date && formik.errors.date ? (
            <span className="error">{formik.errors.date}</span>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="time">
            <span className="label-icon">🕔</span>Time
          </label>
          <select
            type="time"
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            onBlur={handleBlur}>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            </select>
            </div>
          <div className="form-group">
          <label htmlFor="occasion">
          <span className="label-icon">🎉</span>Occasion
          </label>
          <select
                  type="text"
                  id="occasion"
                  name="occasion"
                  value={formik.values.occasion}
                  onChange={formik.handleChange}
                >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Celebration">Celebration</option>
          <option value="Other">Other</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion ? (
          <span className="error">{formik.errors.occasion}</span>
          ) : null}
          </div>
          <div className="form-group">
          <label htmlFor="guests">
          <span className="label-icon">👥</span>Number of Guests
          </label>
          <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formik.values.guests}
                  onChange={formik.handleChange}
                  onBlur={handleBlur}
                />
          {formik.touched.guests && formik.errors.guests ? (
          <span className="error">{formik.errors.guests}</span>
          ) : null}
          </div>
          <div className="form-group">
          <button type="submit" className="submit-button">
          Submit
          </button>
          </div>
          </form>
          )}
          </div>
          );
          }

export default BookingForm;