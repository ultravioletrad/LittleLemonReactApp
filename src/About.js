import React from "react";
import restaurant from './components/icons_assets/restaurant.jpg';
import './About.css'

function About(){
    return (
        <div className="about-container">
          <h1 className="title">Little Lemon</h1>
          <h2 className="sub-title">Chicago</h2>
            <p className="item-description">We are family owned Mediterranean restaurant in a charming neighbourhood,focused on traditional recipes served with a modern twist in a casual but lively environment.The restuarant features a locally sourced menu with daily specials.</p>
            <img src={restaurant} className="item-image" alt="chef with food"/>
            <button className="item-button">Reserve a Table</button>
          </div>
    );

}
export default About;