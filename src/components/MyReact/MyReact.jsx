import React, { Fragment } from 'react';
import MyReactButton from './MyReactButton';
import MyReactCounter from './MyReactCounter';
import MyReactToggle from './MyReactToggle';
import MyReactIsOpen from './MyReactIsOpen';
import useStyles from './MyReactStyles';

const MyReact = () => {
  const s = useStyles();

  return (
    <Fragment>
      <MyReactButton />
      <hr />
      <MyReactCounter
        step={5}
        initialValue={10}
        s={s} />
      <hr />
      <MyReactToggle
        s={s} />
      <hr />
      <MyReactIsOpen 
        s={s} />
      <hr />
      <a
        className={s.source}
        href='https://github.com/itstoreall/geri-react'
        target='_blanck'>
        source
      </a>
    </Fragment>
  );
}

export default MyReact;