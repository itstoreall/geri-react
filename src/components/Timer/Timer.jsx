import React, { useState, useEffect } from "react";
import useStyles from "./TimerStyle";

const Timer = () => {
  const [value, setValue] = useState(new Date());
  const { timer } = useStyles();

  // При втором параметре [] useEffect работает как componentDidMount
  useEffect(() => {
    const id = setInterval(() => {
      setValue(new Date());
    }, 1000);

    // componentWillUnmount
    return () => {
      clearInterval(id);
    };
  }, []);

  // componentDidMount - after every render
  useEffect(() => {
    console.log("componentDidMount");
  });

  // render
  console.log("render");

  return (
    <div className={timer}>
      <p>{value.toTimeString()}</p>
    </div>
  );
};

export default Timer;
