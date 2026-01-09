import React, { useState } from 'react';

export default function PlantCard({ plant }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true); // just disables the button for now
  };

  return (
    <div
      style={{
        width: '180px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '0.5rem',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <img
        src={plant.image} // already imported in productsSlice.js
        alt={plant.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }}
      />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button
        onClick={handleAddToCart}
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
