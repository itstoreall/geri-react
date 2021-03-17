import { createUseStyles } from 'react-jss';

export default createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',

    '& > input': {
      marginBottom: 20,
    },
  },
});
