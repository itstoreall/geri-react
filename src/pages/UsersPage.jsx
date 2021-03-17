import React from 'react';
import Users from '../components/Users';

const UsersPage = ({ location }) => (
  <>
    <h1>Users Page</h1>
    <Users location={location} />

    <ul>
      <li>use server-express</li>
      <li>use nodemon</li>
    </ul>
  </>
);

export default UsersPage;
