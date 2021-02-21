import React from 'react';
import useStyles from './MyReactStyles';

const MyReactButton = () => {
  const s = useStyles();

  return (
    <button className={s.button} onClick={e => console.log(e)}>Click me!</button>
  );
};

export default MyReactButton;