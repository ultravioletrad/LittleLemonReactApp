import React from 'react';
import './Menu.css'
import { useNavigate } from 'react-router-dom'; // import useNavigate hook
import greeksalad from "./components/icons_assets/greek salad.jpg";
import bruchetta from "./components/icons_assets/bruchetta.svg"
import lemondesert from "./components/icons_assets/lemon dessert.jpg"
function Menu(){
    const navigate = useNavigate(); // initialize useNavigate hook

    const handleAddToCart = () => {
    navigate('/OrderOnline'); // navigate to OrderOnline component
  };
    return(
        <div className="menu-container">
        <h1 className="menu-title">This Week's Specials</h1>
        <button className="menu-button">Online Menu</button>
        <div className="menu-items">
            <div className="menu-item">
                <img src={greeksalad} alt="dish1" className="menu-item-image" style={{height:'200px' ,width:'200px'}}/>
                <h2 className="menu-item-title">Greek Salad</h2>
                <p className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='price-button'>
                <p className="menu-item-price">$10.99</p>
                <button className="menu-item-button" onClick={handleAddToCart}>Add to Cart</button> {/* add onClick event */}
          </div>
            
            </div>
            <div className="menu-item">
                <img src={bruchetta} alt="dish2" className="menu-item-image" style={{height:'200px' ,width:'200px'}}/>
                <h2 className="menu-item-title">Bruchetta</h2>
                <p className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='price-button'>
                <p className="menu-item-price">$10.99</p>
                <button className="menu-item-button" onClick={handleAddToCart}>Add to Cart</button> {/* add onClick event */}
          </div>
            </div>
            <div className="menu-item">
                <img src={lemondesert} alt="dish3" className="menu-item-image" style={{height:'200px' ,width:'200px'}}/>
                <h2 className="menu-item-title">Lemon Desert</h2>
                <p className="menu-item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='price-button'>
                <p className="menu-item-price">$10.99</p>
                <button className="menu-item-button" onClick={handleAddToCart}>Add to Cart</button> {/* add onClick event */}
          </div>
                
            </div>
        </div>
    </div>
    );

}
export default Menu;