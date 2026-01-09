import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from '../components/PlantCard';

export default function ProductListing() {
  const products = useSelector(state => state.products);

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '2rem auto',
        padding: '0 1rem',
      }}
    >
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '3rem' }}>
          {/* Category heading */}
          <h2
            style={{
              marginBottom: '1rem',
              fontSize: '1.5rem',
              color: '#333',
              borderBottom: '2px solid #4CAF50',
              paddingBottom: '0.3rem',
            }}
          >
            {category}
          </h2>

          {/* Plant cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1.5rem',
              justifyItems: 'center',
            }}
          >
            {products
              .filter(p => p.category === category)
              .map(p => (
                <PlantCard key={p.id} plant={p} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
