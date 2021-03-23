import React from 'react';
import useStyles from './CounterStyles';

const Controls = ({ step, onIncrement, onDecrement }) => {
  const s = useStyles();

  return (
    <div className={s.counterBtnWrap}>
      <button className={s.counterBtn} type='button' onClick={onIncrement}>
        + {step}
      </button>
      <button className={s.counterBtn} type='button' onClick={onDecrement}>
        - {step}
      </button>
    </div>
  );
};

export default Controls;
