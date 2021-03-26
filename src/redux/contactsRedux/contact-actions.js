import { ADD, DELETE, FILTER } from './contact-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (newContact) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  },
});

export const deleteContact = (id) => ({
  type: DELETE,
  payload: id,
});

export const filterContacts = (value) => ({
  type: FILTER,
  payload: value,
});
