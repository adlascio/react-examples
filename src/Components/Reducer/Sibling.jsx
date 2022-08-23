import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

export default function Sibling() {
  const { state } = useContext(CounterContext);
  return (
    <div className='component'>
      <h1>Sibling</h1>
<<<<<<< HEAD
      <h2>Counter: {state.counter}</h2>
=======
      <h2>Counter: {state.count}</h2>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    </div>
  );
}
