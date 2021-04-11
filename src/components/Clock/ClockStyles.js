import { createUseStyles } from 'react-jss';

export default createUseStyles({
  clock: {
    fontSize: 16,

    '& span': {
      fontSize: 32,
    },
  },

  timerBtn: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    fontSize: 16,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'teal',
    border: 'none',
    borderRadius: 4,
    outline: 'none',

    '&:hover': {
      backgroundColor: 'tomato',
    },
  },
});
