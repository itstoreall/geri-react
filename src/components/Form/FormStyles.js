import { createUseStyles } from 'react-jss'

export default createUseStyles({

  values: {
    margin: 30,
  },

  // ================== Form 
  form: {
    padding: 20,
    backgroundColor: 'skyblue',
  },

  formLabel: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    color: 'white',

    '&:last-child)': {
      marginBottom: 30,
    },
  },

  formInput: {
    padding: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
    margin: {
      left: 20,
    },
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

  formButton: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    width: '100%',
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

  // ================== Input
  input: {
    padding: {
      left: 10,
      right: 10,
    },
    margin: {
      top: 20,
      bottom: 20,
    },
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