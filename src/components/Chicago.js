import React from "react";
import food from './icons_assets/restauranfood.jpg'
import './Chicago.css'
import logo2 from './icons_assets/Asset 9@4x.png'


const Chicago = () => {
    
        return (
            <div className="chicago-container">
              <h1 className="title">Little Lemon</h1>
              <h2 className="sub-title">Chicago</h2>
                <p className="item-description">We are family owned Mediterranean restaurant in a charming neighbourhood,focused on traditional recipes served with a modern twist in a casual but lively environment.The restuarant features a locally sourced menu with daily specials..</p>
                <img src={food} className="item-image" alt="chef with food" style={{height:'280px', width:'280px'}}/>
                <img src={logo2} className="logo2" alt="logo2" style={{height:'100px', width:'100px'}}/>
                <button className="item-button">Reserve a Table</button>
              </div>
        
    );


            
    
}
export default Chicago;