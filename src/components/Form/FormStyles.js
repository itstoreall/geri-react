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
});