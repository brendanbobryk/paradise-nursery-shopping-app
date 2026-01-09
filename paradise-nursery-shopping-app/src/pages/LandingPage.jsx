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
        padding: '1rem',
      }}
    >
      {/* Overlay for readability */}
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-transparent white
          padding: '2rem 3rem',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <h1 style={{ color: 'black', marginBottom: '1rem' }}>Paradise Nursery</h1>
        <p style={{ color: 'black', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Your one-stop shop for beautiful houseplants!
        </p>
        <button
          onClick={() => navigate("/products")}
          style={{
            padding: '0.6rem 1.2rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
