import { createUseStyles } from 'react-jss';

export default createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    '& button': {
      marginBottom: 30,
      cursor: 'pointer',
    },

    '& p': {
      marginBottom: 5,
    },

    '& p:last-child': {
      marginBottom: 50,
    },
  },
});
