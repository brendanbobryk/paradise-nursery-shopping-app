import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{backgroundImage: 'url(/assets/background.jpg)'}}>
      <h1>GreenThumb Shop</h1>
      <p>Your one-stop online shop for beautiful houseplants!</p>
      <button onClick={() => navigate("/products")}>Get Started</button>
    </div>
  );
}
