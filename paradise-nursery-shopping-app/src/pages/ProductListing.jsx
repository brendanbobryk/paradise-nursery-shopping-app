import React from 'react';
import products from '../redux/productsSlice';
import PlantCard from '../components/PlantCard';

export default function ProductListing() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {products.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
