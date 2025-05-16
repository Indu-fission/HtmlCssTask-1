import React from 'react';
import './Home.css';
import unicart from '../../assets/UnicartStartingpage.png';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/products');
  };

  return (
    <div id="home" className="home-page">
      <img src={unicart} alt="UniCart" className="background-bike" />
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to UniCart</h1>
          <p>Your ultimate online shopping destination for fashion, gadgets, and daily essentials.</p>
          <p>Discover exclusive deals, trending items, and doorstep delivery — all at your fingertips.</p>
          <button className="shop-now-button" onClick={handleShopNow}>Shop Now  <IoIosArrowRoundForward className="shop-arrow" /></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
