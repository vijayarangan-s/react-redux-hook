import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT_COUNT' })}>Increment</button>

      <button onClick={() => dispatch({ type: 'DECREMENT_COUNT' })}>Decrement</button>
    </div>
  );
}
