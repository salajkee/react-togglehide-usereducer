import React, { useReducer } from 'react';
import './Counter.scss';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const increment = () => dispatch({ type: 'increment' });

  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <div className="counter">
      <button className="counter__btn" onClick={increment}>
        Increment
      </button>
      <span className="counter__count">{state}</span>
      <button className="counter__btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
