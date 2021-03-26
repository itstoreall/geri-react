import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterRepetaRedicer from './counterRepeta/counter-reducer';
import todosReducer from './todos/todos-reducer';
import counterGeriReducer from './counterGeri/reducer';
import todosGeriReducer from './todosGeri/reducer';
// import contactReducer from './contacts/contact-reducer';
import contactReducer from './contactsRedux/contact-reducer';

const rootReducer = combineReducers({
  counterRepeta: counterRepetaRedicer,
  todos: todosReducer,
  counterGeri: counterGeriReducer,
  todosGeri: todosGeriReducer,
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
