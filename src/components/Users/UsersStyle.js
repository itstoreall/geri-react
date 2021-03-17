import { createUseStyles } from 'react-jss';

export default createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    '& > input': {
      marginBottom: 20,
      width: 280,
    },

    '& > a': {
      display: 'inline-block',
      marginBottom: 10,
      textDecoration: 'none',
      color: 'teal',

      '&:hover': {
        color: 'tomato',
      },
    },
  },
});
