import types from './types';

const counterReducerGeri = (state = 10, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return state + action.payload;

    case types.COUNTER_DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

export default counterReducerGeri;
