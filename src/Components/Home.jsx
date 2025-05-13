import React from 'react';
import './Home.css';
import duke from '../assets/duke.jpg';

const Home = () => {
  return (
    <div id="home" className="home-page">
      <img src={duke} alt="Bike" className="background-bike" />
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to BikeHub</h1>
          <p>Your dream bike is just a click away. We offer premium bikes that combine style, speed, and performance.</p>
          <p>Explore a wide range of latest models with unbeatable deals. Ride with power, ride with pride!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
