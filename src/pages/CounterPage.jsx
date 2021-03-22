import React from 'react';
import Counter from '../components/Counter';

const CounterPage = () => {
  return (
    <>
      <h1>Counter</h1>
      <Counter />

      <ul>
        <li>use Redux</li>
        <li>use React Redux</li>
      </ul>
    </>
  );
};

export default CounterPage;
