import React, { Fragment } from 'react';
import MyReactButton from './MyReactButton';
import MyReactCounter from './MyReactCounter';
import useStyles from './MyReactStyles';

const MyReact = () => {
  const s = useStyles();

  return (
    <Fragment>
      <MyReactButton />
      <MyReactCounter />
      <a className={s.source} href='https://github.com/itstoreall/geri-react' target='_blanck'>source</a>
    </Fragment>
  );
}

export default MyReact;