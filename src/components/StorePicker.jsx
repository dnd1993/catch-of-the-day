import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { getFunName } from '../helpers';

function StorePicker() {
  const myInput = useRef();
  const history = useHistory();
  const goToStore = () => {
    // 1. Stop the form from submitting
    // 2. get the text from that input
    const storeName = myInput.current.value;
    console.log('hi');
    // 3. Change the page to /store/whatever-they-entered
    history.push(`/store/${storeName}`);
  };
  return (
    <form className="store-selector">
      <h2>Please Enter A Store</h2>
      <input
        type="text"
        ref={myInput}
        required
        placeholder="Store Name"
        defaultValue={getFunName()}
      />
      <button type="button" onClick={goToStore}>Visit Store →</button>
    </form>
  );
}

export default StorePicker;
