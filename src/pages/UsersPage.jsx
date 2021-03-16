import React from 'react';
import Users from '../components/Users';

const UsersPage = ({ location }) => (
  <>
    <h1>Users Page</h1>
    <Users location={location} />
  </>
);

export default UsersPage;
