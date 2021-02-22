import { createUseStyles } from 'react-jss';

export default createUseStyles({

  button: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    margin: 30,
    marginRight: 0,
    fontSize: 16,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'teal',
    border: 'none',
    borderRadius: 4,
    outline: 'none',
  },

  source: {
    textDecoration: 'none',
    color: '#ccc',

    '&:hover': {
      color: 'teal',
    }
  }
});