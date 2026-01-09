import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      className="cart-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.5rem 0',
        borderBottom: '1px solid #ccc',
      }}
    >
      {/* Image container */}
      <div
        style={{
          width: '100px',
          height: '100px',
          overflow: 'hidden',
          borderRadius: '8px',
          flexShrink: 0,
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // ensures proper scaling/cropping
          }}
        />
      </div>

      {/* Item info */}
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ margin: '0 0 0.3rem 0' }}>{item.name}</h3>
        <p style={{ margin: '0 0 0.3rem 0' }}>${item.price}</p>
        <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
      </div>

      {/* Quantity buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <button
          onClick={() => dispatch(increaseItem(item.id))}
          style={{ padding: '0.3rem', borderRadius: '4px', cursor: 'pointer' }}
        >
          +
        </button>
        <button
          onClick={() => dispatch(decreaseItem(item.id))}
          style={{ padding: '0.3rem', borderRadius: '4px', cursor: 'pointer' }}
        >
          -
        </button>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          style={{
            padding: '0.3rem',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
