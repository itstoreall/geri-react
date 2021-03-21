import React from 'react';
import Hoc from '../components/Hoc';

const HocPage = () => {
  return (
    <>
      <h1>Higher-Order Component</h1>
      <Hoc />

      <ul>
        <li>use HOC</li>
        <li>use withLog</li>
        <li>use Toggler</li>
      </ul>
    </>
  );
};

export default HocPage;
