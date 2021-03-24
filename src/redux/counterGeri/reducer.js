import types from './types';

const initialState = {
  value: 1,
  step: 1,
};

// const value = (state = initialState, action) => {
//   switch (action.type) {
//     case types.COUNTER_INCREMENT:
//       return {
//         ...state,
//         value: state.value + state.step,
//       };

//     case types.COUNTER_DECREMENT:
//       return {
//         ...state,
//         value: state.value - state.step,
//       };

//     default:
//       return state;
//   }
// }

const counterReducerGeri = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + state.step,
      };

    case types.COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - state.step,
      };

    case types.COUNTER_SET_STEP:
      return {
        ...state,
        step: action.payload,
      };

    default:
      return state;
  }
};

export default counterReducerGeri;
