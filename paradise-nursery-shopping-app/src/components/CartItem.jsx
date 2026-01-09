import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeItem } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        marginBottom: '1rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: '120px',
          height: '120px',
          overflow: 'hidden',
          borderRadius: '10px',
          flexShrink: 0,
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Item info */}
      <div style={{ flexGrow: 1, padding: '0 1rem' }}>
        <h3 style={{ margin: '0 0 0.3rem 0' }}>{item.name}</h3>
        <p style={{ margin: '0 0 0.3rem 0' }}>${item.price}</p>
        <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => dispatch(increaseItem(item.id))}
          style={{
            padding: '0.5rem 0.8rem',
            borderRadius: '6px',
            cursor: 'pointer',
            border: '1px solid #4CAF50',
            backgroundColor: '#4CAF50',
            color: 'white',
          }}
        >
          +
        </button>
        <button
          onClick={() => dispatch(decreaseItem(item.id))}
          style={{
            padding: '0.5rem 0.8rem',
            borderRadius: '6px',
            cursor: 'pointer',
            border: '1px solid #f0ad4e',
            backgroundColor: '#f0ad4e',
            color: 'white',
          }}
        >
          -
        </button>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          style={{
            padding: '0.5rem 0.8rem',
            borderRadius: '6px',
            cursor: 'pointer',
            border: '1px solid #f44336',
            backgroundColor: '#f44336',
            color: 'white',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
