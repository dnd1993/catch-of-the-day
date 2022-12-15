/* eslint-disable react/prop-types */
import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

function Inventory({
  fishes, updateFish, deleteFish, addFish, loadSampleFishes,
}) {
  // 3. They must be the owner, just render the inventory
  return (
    <div className="inventory">
      <h2>Inventory</h2>
      {Object.keys(fishes).map((key) => (
        <EditFishForm
          key={key}
          index={key}
          fish={fishes[key]}
          updateFish={updateFish}
          deleteFish={deleteFish}
        />
      ))}
      <AddFishForm addFish={addFish} />
      <button type="button" onClick={loadSampleFishes}>
        Load Sample Fishes
      </button>
    </div>
  );
}

export default Inventory;
