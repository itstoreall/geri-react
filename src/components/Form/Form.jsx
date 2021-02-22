import React, { Fragment } from "react";
import FormSignUp from './FormSignUp';
import FormInput from './FormInput';
import useStyles from './FormStyles';

const Form = () => {
  const s = useStyles();

  return (
    <Fragment>
      <FormSignUp
        s={s} />
      <hr />
      <FormInput
        s={s} />
      <hr />
    </Fragment>
  );
};

export default Form;