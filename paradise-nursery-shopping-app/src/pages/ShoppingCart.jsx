import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '1rem',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Shopping Cart</h2>

      {cart.items.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <>
          {/* Cart items */}
          {cart.items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Totals */}
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            <span>Total items: {cart.totalQuantity}</span>
            <span>Total price: ${cart.totalPrice.toFixed(2)}</span>
          </div>

          {/* Action buttons */}
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={() => alert('Coming Soon!')}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Checkout
            </button>
            <button
              onClick={() => navigate('/products')}
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                border: '1px solid #4CAF50',
                backgroundColor: 'white',
                color: '#4CAF50',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}
