/* eslint-disable react/prop-types */
import React from 'react';

function EditFishForm({
  fish, updateFish, deleteFish, index,
}) {
  const handleChange = (event) => {
    // update that fish
    // 1. Take a copy of the curernt fish
    const updatedFish = {
      ...fish,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? parseFloat(event.currentTarget.value)
          : event.currentTarget.value,
    };
    updateFish(index, updatedFish);
  };
  return (
    <div className="fish-edit">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={fish.name}
      />
      <input
        type="text"
        name="price"
        onChange={handleChange}
        value={fish.price}
      />
      <select
        type="text"
        name="status"
        onChange={handleChange}
        value={fish.status}
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        onChange={handleChange}
        value={fish.desc}
      />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={fish.image}
      />
      <button type="button" onClick={() => deleteFish(index)}>
        Remove Fish
      </button>
    </div>
  );
}

export default EditFishForm;
