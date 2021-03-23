import React from 'react';
import CounterGeri from '../components/CounterGeri';

const CounterGeriPage = () => {
  return (
    <>
      <h1>Counter (Geri)</h1>
      <CounterGeri />

      <ul>
        <li>use Redux</li>
        <li>use React Redux</li>
      </ul>
    </>
  );
};

export default CounterGeriPage;
