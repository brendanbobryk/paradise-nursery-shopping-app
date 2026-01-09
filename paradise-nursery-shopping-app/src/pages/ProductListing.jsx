import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from '../components/PlantCard';

export default function ProductListing() {
  const products = useSelector(state => state.products);

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-list">
            {products.filter(p => p.category === category)
                     .map(p => <PlantCard key={p.id} plant={p} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
