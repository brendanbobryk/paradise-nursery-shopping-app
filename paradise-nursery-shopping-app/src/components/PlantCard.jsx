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
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={handleAdd} disabled={added}>
        {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
