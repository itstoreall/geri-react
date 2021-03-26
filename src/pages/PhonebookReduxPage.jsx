import React from 'react';
import App from '../components/PhonebookRedux';

const PhonebookReduxPage = () => {
  return (
    <>
      <h1>Phonebook Redux</h1>
      <App />

      <ul>
        <li>use Redux</li>
        <li>use React-Redux</li>
        <li>use redux-devtools-extension</li>
        <li>use uuid</li>
      </ul>
    </>
  );
};

export default PhonebookReduxPage;
