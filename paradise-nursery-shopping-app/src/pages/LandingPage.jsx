import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background.jpg';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)', // dark overlay for readability
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
          maxWidth: '600px',
          padding: '1rem',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
          }}
        >
          Paradise Nursery
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
          }}
        >
          Your one-stop shop for beautiful houseplants!
        </p>
        <button
          onClick={() => navigate('/products')}
          style={{
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            transition: 'background-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#45a049';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#4CAF50';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
