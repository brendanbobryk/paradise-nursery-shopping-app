import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg';

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
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Overlay box behind text */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // semi-transparent white
          padding: '2rem 3rem',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'black', marginBottom: '1rem' }}>Paradise Nursery</h1>
        <p style={{ color: 'black', marginBottom: '1.5rem' }}>
          Your one-stop shop for beautiful houseplants!
        </p>
        <button
          onClick={() => navigate('/products')}
          style={{
            padding: '0.6rem 1.2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
