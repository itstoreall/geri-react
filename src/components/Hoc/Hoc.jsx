import React from 'react';
import TestComponent from './TestComponent';
import Toggler from '../../hoc/Toggler';

const Hoc = () => {
  return (
    <div className='hoc'>
      <Toggler>
        {({ show, toggle }) => (
          <>
            <button onClick={toggle}>Toggle</button>
            {show && <TestComponent x={7} />}
          </>
        )}
      </Toggler>
    </div>
  );
};

export default Hoc;
