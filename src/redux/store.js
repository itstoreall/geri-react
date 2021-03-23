import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterRedicer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

const rootReducer = combineReducers({
  counter: counterRedicer,
  todos: todosReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
