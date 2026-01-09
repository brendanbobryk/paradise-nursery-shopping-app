// src/components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#4CAF50',
        color: 'white',
      }}
    >
      <h1>Paradise Nursery</h1>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
        🛒 Cart ({totalQuantity})
      </Link>
    </header>
  );
}
