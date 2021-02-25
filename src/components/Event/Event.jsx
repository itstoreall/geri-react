import React, { Fragment, useState } from 'react';
import EventButton from './EventButton';
import EventCounter from './EventCounter';
import EventToggle from './EventToggle';
import EventIsOpen from './EventIsOpen';
import EventMessage from './EventMessage';
import EventMultyCounter from './EventMultyCounter';
import useStyles from './EventStyles';

const Event = () => {
  const [counters, setCounters] = useState([]);
  const s = useStyles();

  const handleAddCounter = () => {
    setCounters((prevState) => [
      ...prevState,
      {
        id: Date.now(),
      },
    ]);
  };

  const handleDeleteCounter = (id) => {
    setCounters((prevState) =>
      prevState.filter((counter) =>
        counter.id !== id))
  };

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
      <button
        className={s.multyCounterBtn}
        onClick={handleAddCounter}>
        Add a Counter
      </button>
      {
        counters.map(({id}) => <EventMultyCounter
          key={id}
          initialValue={1}
          s={s}
          onDelete={() => handleDeleteCounter(id)}
        />)
      }
      {/* <EventMultyCounter
        initialValue={5}
        s={s} />
      <EventMultyCounter
        // initialValue={10}
        s={s} /> */}
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