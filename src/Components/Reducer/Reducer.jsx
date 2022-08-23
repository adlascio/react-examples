import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

export default function Reducer() {
  return (
    <div className='component' style={{ display: 'flex' }}>
      <h1>Reducer</h1>
=======
=======
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
import Child from './Child';
import { CounterProvider } from './CounterContext';
import Sibling from './Sibling';

export default function Reducer() {
  return (
<<<<<<< HEAD
    <div className='component'>
=======
    <div className='component' style={{ display: 'flex', width: '100%' }}>
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
      <h1>Reducer</h1>
      <CounterProvider>
        <Child />
        <Sibling />
      </CounterProvider>
<<<<<<< HEAD
>>>>>>> 4448a5003996a5c97471810583f6b1033a24df1b
=======
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    </div>
  );
}
