import types from './types';

const initialState = [
  {
    date: 1615479024039,
    isDone: false,
    value: 'Todo 1',
    urgency: 'low',
    id: 1,
  },
  {
    date: 1615479034181,
    isDone: false,
    value: 'Todo 2',
    urgency: 'medium',
    id: 2,
  },
  {
    date: 1615479042821,
    isDone: false,
    value: 'Todo 3',
    urgency: 'high',
    id: 3,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.types) {
    case types.TODO_ADD:
      return [...state, action.payload];

    case types.TODO_DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
