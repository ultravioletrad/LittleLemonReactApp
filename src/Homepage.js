import React from 'react';
import './Homepage.css';
import Chicago from './components/Chicago';
import ReviewRow from './components/Review';
import Specials from './Menu';

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="content-container">
        <div className="component1">
          <Chicago />
        </div>
        <div className="component2">
          <Specials />
        </div>
        <div className="component3">
          <h1>Customer Reviews</h1>
          <ReviewRow />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
