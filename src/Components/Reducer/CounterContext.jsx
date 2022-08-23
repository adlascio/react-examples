import { createContext, useReducer, useState } from 'react';

export const CounterContext = createContext();

const reducer = (state, action) => {
<<<<<<< HEAD
  console.log('action', action);
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + action.payload };
    case 'decrement':
      return { counter: state.counter - action.payload };
    case 'reset':
      return { counter: 0 };
=======
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: 0 };
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
<<<<<<< HEAD
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
=======
  const [state, dispatch] = useReducer(reducer, { count: 0 });
>>>>>>> c30b20f3d371bebde482a103f1f49e70a3816c29
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount((prevState) => prevState + 1);
  //   };
  //   const decrement = () => {
  //     setCount((prevState) => prevState - 1);
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
