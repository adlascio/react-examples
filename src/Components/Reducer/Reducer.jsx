import React from 'react';
<<<<<<< HEAD

export default function Reducer() {
  return (
    <div className='component' style={{ display: 'flex' }}>
      <h1>Reducer</h1>
=======
import Child from './Child';
import { CounterProvider } from './CounterContext';
import Sibling from './Sibling';

export default function Reducer() {
  return (
    <div className='component'>
      <h1>Reducer</h1>
      <CounterProvider>
        <Child />
        <Sibling />
      </CounterProvider>
>>>>>>> 4448a5003996a5c97471810583f6b1033a24df1b
    </div>
  );
}
