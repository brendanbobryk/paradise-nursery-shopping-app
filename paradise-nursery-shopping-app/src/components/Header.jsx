import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#4CAF50', // green header
        color: 'white',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Company name links to landing page */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
        }}
      >
        Paradise Nursery
      </Link>

      {/* Navigation links */}
      <nav
        style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
        }}
      >
        <Link
          to="/products"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem', // explicitly match cart text
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#d4ffd4')}
          onMouseLeave={e => (e.currentTarget.style.color = 'white')}
        >
          Products
        </Link>

        <Link
          to="/cart"
          style={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem', // match Products exactly
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem', // spacing between text and icon
            transition: 'color 0.2s',
            lineHeight: 1, // ensures vertical alignment
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#d4ffd4')}
          onMouseLeave={e => (e.currentTarget.style.color = 'white')}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>Cart</span> 🛒 {totalQuantity}
        </Link>
      </nav>
    </header>
  );
}
