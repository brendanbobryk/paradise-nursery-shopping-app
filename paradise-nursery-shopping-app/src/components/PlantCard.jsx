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
        width: '180px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '0.5rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '150px',      // fixed height for images
          overflow: 'hidden',
          borderRadius: '6px',
          marginBottom: '0.5rem',
        }}
      >
        <img
          src={plant.image}
          alt={plant.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',   // scale/crop images correctly
          }}
        />
      </div>
      <h3 style={{ margin: '0.5rem 0' }}>{plant.name}</h3>
      <p style={{ margin: '0.2rem 0' }}>${plant.price}</p>
      <button
        onClick={handleAdd}
        disabled={added}
        style={{
          padding: '0.4rem 0.8rem',
          backgroundColor: added ? '#ccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: added ? 'not-allowed' : 'pointer',
        }}
      >
        {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
