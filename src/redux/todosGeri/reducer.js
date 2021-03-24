import types from './types';

const initialState = {
  x: 0,
  items: [
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
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case types.TODO_DELETE:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };

    case 'counter/increment':
      return {
        ...state,
        x: state.x + 1,
      };

    default:
      return state;
  }
};

export default reducer;
