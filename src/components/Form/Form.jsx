import { Fragment } from "react";

const Form = ({ sayHello, someComponent: SomeComponent }) => (
  <Fragment>
    <label>
      <input htmlFor="trololo" />
    </label>
    <button onClick={sayHello}>Push me</button>

    <SomeComponent />
  </Fragment>
);

export default Form;