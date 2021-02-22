import { createUseStyles } from 'react-jss'

export default createUseStyles({

  form: {
    backgroundColor: 'red',
  },

  input: {
    paddingLeft: 10,
    paddingRight: 10,
    width: 260,
    height: 40,
    fontSize: 16,
    border: [[2, 'solid', '#ccc']],
    borderRadius: 4,
    outline: 'none',
     
    '&:focus': {
      border: [[2, 'solid', 'skyblue']]
    },
  },

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

    '&:hover': {
      backgroundColor: 'tomato',
    }
  },
});