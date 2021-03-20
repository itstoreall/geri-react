import React from 'react';
import withHOC from '../../hoc/withHOC';
import withLog from '../../hoc/withLog';

const TestComponent = ({ extraParam }) => {
  return (
    <div className='testComponent'>
      <h2>TestComponent</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        voluptas provident quod dolores vero, iure enim totam at numquam
        veritatis ut odio quas eveniet a.
      </p>
      <p>{extraParam}</p>
    </div>
  );
};

// export default withHOC(TestComponent);
export default withHOC(withLog(TestComponent));
