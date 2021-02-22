import React, { Fragment } from 'react';
import EventButton from './EventButton';
import EventCounter from './EventCounter';
import EventToggle from './EventToggle';
import EventIsOpen from './EventIsOpen';
import EventMessage from './EventMessage';
import useStyles from './EventStyles';

const Event = () => {
  const s = useStyles();

  return (
    <Fragment>
      <EventButton />
      <hr />
      <EventCounter
        step={5}
        initialValue={10}
        s={s} />
      <hr />
      <EventToggle
        s={s} />
      <hr />
      <EventIsOpen 
        s={s} />
      <hr />
      <EventMessage
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

export default Event;