import { createUseStyles } from 'react-jss'

export default createUseStyles({

  values: {
    margin: 30,
  },

  // ================== Form 
  form: {
    padding: 20,
    margin: {
      top: 30,
      bottom: 30,
    },
    border: [[1, 'solid', '#ccc']],
    backgroundColor: '#ffffff',
    borderRadius: 7,
  },

  formLabel: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 600,
    color: 'teal',

    '&:not(:nth-child(3))': {
      marginBottom: 10,
    },

    '&:nth-child(3)': {
      marginBottom: 20,
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
    border: [[1, 'solid', '#ccc']],
    borderRadius: 4,
    outline: 'none',
     
    '&:focus': {
      border: [[3, 'solid', 'skyblue']],
      padding: {
        left: 8,
      },
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
    },
  },

  formButtonDisabled: {
    backgroundColor: '#f1f1f1',
    color: 'white',
    cursor: 'auto',
      
    '&:hover': {
      backgroundColor: '#f1f1f1',
      color: 'white',
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