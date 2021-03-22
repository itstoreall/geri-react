import { createUseStyles } from 'react-jss';

export default createUseStyles({
  multyCounter: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
  },

  multyCounterBtn: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    margin: 30,
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
