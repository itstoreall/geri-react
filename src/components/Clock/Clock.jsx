import { useState, useEffect, useRef } from 'react';
import useStyle from './ClockStyles';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const s = useStyle();

  // useRef() - stable value of the variable
  const intervalId = useRef();

  console.log(intervalId);

  // componentDidMount
  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log(Date.now());
      setTime(new Date());
    }, 1000);

    // Returns the cleanup function (componentWillUnmount)
    return () => {
      stopTimer();
      console.log('Clear');
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <p className={s.clock}>
        Current time: <span>{time.toLocaleTimeString()}</span>
      </p>
      <button className={s.timerBtn} type='button' onClick={stopTimer}>
        Stop
      </button>
    </>
  );
};

export default Clock;
