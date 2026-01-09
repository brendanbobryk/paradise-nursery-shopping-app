import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          padding: '2rem',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'black' }}>Paradise Nursery</h1>
        <p style={{ color: 'black' }}>Your one-stop shop for beautiful houseplants!</p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  );
}
