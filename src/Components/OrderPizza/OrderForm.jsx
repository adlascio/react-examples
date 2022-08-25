import React, { useRef, useState } from 'react';

const OrderForm = () => {
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState('');
  const clientRef = useRef();
  const toppingRef = useRef();
  const addTopping = () => {};
  const changeSize = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>New Order</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Client Name' ref={clientRef} />
        <div>
          <input type='text' placeholder='Add a topping' ref={toppingRef} />
          <button type='button' onClick={addTopping}>
            Add topping
          </button>
        </div>
        <div onChange={changeSize}>
          <div>
            <label htmlFor=''>Small</label>
            <input type='radio' name='size' value={'small'} />
          </div>
          <div>
            <label htmlFor=''>Medium</label>
            <input type='radio' name='size' value={'medium'} />
          </div>
          <div>
            <label htmlFor=''>Large</label>
            <input type='radio' name='size' value={'large'} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
