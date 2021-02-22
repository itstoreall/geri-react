import React from 'react';
import useStyles from './EventStyles';

const EventButton = () => {
  const s = useStyles();

  return (
    <button className={s.button} onClick={e => console.log(e)}>Click me!</button>
  );
};

export default EventButton;