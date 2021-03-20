import React from 'react';
import TestComponent from './TestComponent';

const Hoc = () => {
  return (
    <div className='hoc'>
      <TestComponent x={7} />
    </div>
  );
};

export default Hoc;
