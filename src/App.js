/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import sampleFishes from './sample-fishes';
import Fish from './components/Fish';
import base from './base';

function App({ match }) {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});
  let ref = useRef();
  useEffect(() => {
    const { params } = match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      setOrder(JSON.parse(localStorageRef));
    }

    ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
    return () => {
      base.removeBinding(ref);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      match.params.storeId,
      JSON.stringify(order),
    );
  }, [order]);

  const addFish = (fish) => {
    // 1. Take a copy of the existing state
    const copyFishes = { ...fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    setFishes(copyFishes);
  };

  const updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const copyFishes = { ...fishes };
    // 2. Update that state
    copyFishes[key] = updatedFish;
    // 3. Set that to state
    setFishes(copyFishes);
  };

  const deleteFish = (key) => {
    // 1. take a copy of state
    const copyFishes = { ...fishes };
    // 2. update the state
    copyFishes[key] = null;
    // 3.  update state
    setFishes(copyFishes);
  };

  const loadSampleFishes = () => {
    setFishes(sampleFishes);
  };

  const addToOrder = (key) => {
    // 1. take a copy of state
    const copyOrder = { ...order };
    // 2. Either add to the order, or update the number in our order
    copyOrder[key] = copyOrder[key] + 1 || 1;
    // 3. Call setState to update our state object
    setOrder(copyOrder);
  };

  const removeFromOrder = (key) => {
    // 1. take a copy of state
    const copyOrder = { ...order };
    // 2. remove that item from order
    delete copyOrder[key];
    // 3. Call setState to update our state object
    setOrder(copyOrder);
  };
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map((key) => (
            <Fish
              key={key}
              index={key}
              details={fishes[key]}
              addToOrder={addToOrder}
            />
          ))}
        </ul>
      </div>
      <Order
        fishes={fishes}
        order={order}
        removeFromOrder={removeFromOrder}
      />
      <Inventory
        addFish={addFish}
        updateFish={updateFish}
        deleteFish={deleteFish}
        loadSampleFishes={loadSampleFishes}
        fishes={fishes}
        storeId={match.params.storeId}
      />
    </div>
  );
}

export default App;
