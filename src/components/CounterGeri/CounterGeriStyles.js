import { createUseStyles } from 'react-jss';

export default createUseStyles({
  counter: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,

    '& span': {
      margin: 10,
      width: 50,
      textAlign: 'center',
      fontSize: 24,
    },
  },

  counterBtn: {
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
