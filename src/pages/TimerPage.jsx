import React, { Fragment, useState } from "react";
import Timer from "../components/Timer";
import Button from "@material-ui/core/Button";
import useStyles from "../components/Timer/TimerStyle";

const TimerPage = () => {
  const [showTimer, setShowTimer] = useState(false);
  const { button } = useStyles();

  const toggleShowTimer = () => setShowTimer((prevState) => !prevState);

  return (
    <Fragment>
      <h1>Timer</h1>
      <Button
        className={button}
        variant="contained"
        color="primary"
        onClick={toggleShowTimer}
      >
        {showTimer ? "Hide" : "Show"}
      </Button>
      {showTimer && <Timer />}
    </Fragment>
  );
};

export default TimerPage;
