import React from "react";
import { Link } from "react-router-dom";
import logo from "./icons_assets/Logo.svg";
import './Nav.css'

const Nav = () => {
    return (
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="logo" >
              <img src = {logo} alt="LittleLemonLogo" />
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Menu" className="nav-link">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/Reservations" className="nav-link">Reservations</Link>
            </li>
            <li className="nav-item">
              <Link to="/OrderOnline" className="nav-link">OrderOnline</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">Login</Link>
            </li>
          </ul>
        </nav>
    );
}
export default Nav;
