import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg'; // Correct path

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',  // ensures text is visible
        textAlign: 'center',
      }}
    >
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants!</p>
      <button onClick={() => navigate("/products")}>Get Started</button>
    </div>
  );
}
