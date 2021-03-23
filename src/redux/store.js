import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterRepetaRedicer from './counterRepeta/counter-reducer';
import todosReducer from './todos/todos-reducer';
import counterGeriReducer from './counterGeri/reducer';

const rootReducer = combineReducers({
  counterRepeta: counterRepetaRedicer,
  todos: todosReducer,
  counterGeri: counterGeriReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
