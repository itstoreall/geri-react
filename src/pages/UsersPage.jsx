import React from 'react';
import Users from '../components/Users';

const UsersPage = ({ location, history }) => (
  <>
    <h1>Users Page</h1>
    <Users location={location} history={history} />

    <ul>
      <li>use server-express</li>
      <li>use axios</li>
      <li>use nodemon</li>
      <li>use query-string</li>
    </ul>
  </>
);

export default UsersPage;
