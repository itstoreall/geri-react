import React, { Fragment } from 'react';
// import Header from '.../components/Header';
// import NewComponent from '.../components/NewComponent';
import Form from '../components/Form/Form';
import TestComponent from '../components/TestComponent';

const TestPage = () => {
  // const x = 3;
  const sayHello = () => console.log('Hello');

  return (
    <Fragment>
      <h1>Test Component</h1>
      {/* <Header someMumber={x} age={19} /> */}

      {/* <NewComponent>
        <h1>Test</h1>
      </NewComponent> */}

      <Form sayHello={sayHello} someComponent={TestComponent} />
    </Fragment>
  );
};

export default TestPage;