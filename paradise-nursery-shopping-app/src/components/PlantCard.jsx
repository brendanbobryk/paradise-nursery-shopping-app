import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addItem(plant));
    setAdded(true);
  };

  return (
    <div
      className="plant-card"
      style={{
        width: '200px',
        textAlign: 'center',
        borderRadius: '12px',
        padding: '0.8rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
    >
      <div
        style={{
          width: '100%',
          height: '160px',
          overflow: 'hidden',
          borderRadius: '10px',
          marginBottom: '0.6rem',
        }}
      >
        <img
          src={plant.image}
          alt={plant.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <h3 style={{ margin: '0.5rem 0', fontSize: '1.1rem', color: '#333' }}>
        {plant.name}
      </h3>
      <p style={{ margin: '0.2rem 0', color: '#666' }}>${plant.price}</p>
      <button
        onClick={handleAdd}
        disabled={added}
        style={{
          padding: '0.5rem 1rem',
          marginTop: '0.5rem',
          width: '100%',
          backgroundColor: added ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: added ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.2s',
        }}
      >
        {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
