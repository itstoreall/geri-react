import React, { Fragment } from "react";
import FormItems from './FormItems'
import useStyles from './FormStyles';

const Form = () => {
  const s = useStyles();

  return (
    <Fragment>
      <FormItems
        s={s} />
    </Fragment>
  );
};

export default Form;