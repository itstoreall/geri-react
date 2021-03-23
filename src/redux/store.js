import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterRedicer from './counter/counter-reducer';

// const valueReducer = (state = 10, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return state + payload;

//     case 'counter/Decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 5, action) => state;

// const counterRedicer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

const rootReducer = combineReducers({
  counter: counterRedicer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
