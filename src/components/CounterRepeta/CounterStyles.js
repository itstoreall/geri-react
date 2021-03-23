import { createUseStyles } from 'react-jss';

export default createUseStyles({
  counter: {
    display: 'inline-block',
    marginBottom: 50,
    textAlign: 'center',

    '& span': {
      display: 'block',
      marginBottom: 20,
      width: '100%',
      fontSize: 32,
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

    '&:first-child': {
      marginRight: 20,
    },

    '&:hover': {
      backgroundColor: 'tomato',
    },
  },
});
