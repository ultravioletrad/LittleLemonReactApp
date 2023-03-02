import React, { useState } from "react";
import Specials from "./Menu";
import './OrderOnline.css'

function OrderOnline() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const itemName = event.target.name;
    if (event.target.checked) {
      setSelectedItems((prevItems) => [...prevItems, itemName]);
    } else {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== itemName)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected items:", selectedItems);
    // Here you can add code to send the selected items to the server for processing
    alert("Your order is submitted");
  };

  return (
    <div className="OnlineOrder">
      <h1>Welcome to Little Lemon Order Online page, please select the menu items!</h1>
      <Specials handleCheckboxChange={handleCheckboxChange} />
      <form onSubmit={handleSubmit}>
        <label>Your Online order:</label>
        <ul>
          {selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button type="submit" aria-label="On Click" >Submit</button>
      </form>
    </div>
  );
}

export default OrderOnline;
