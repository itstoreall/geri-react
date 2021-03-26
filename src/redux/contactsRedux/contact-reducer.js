// import dataBase from '../../components/dataBase/dataBase.json';
import dataBase from '../../components/PhonebookRedux/dataBase/dataBase.json';
import { combineReducers } from 'redux';
import { ADD, DELETE, FILTER } from './contact-types';

// Логика обновления состояния
const itemsReducer = (state = dataBase, { type, payload }) => {
  switch (type) {
    case ADD:
      return [payload, ...state];

    case DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
