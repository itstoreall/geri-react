import React from 'react';
import UserDetails from '../components/UserDetails';

const UserDetailsPage = ({ match, history, location }) => {
  return (
    <>
      <h1>User Details</h1>
      <UserDetails match={match} history={history} location={location} />

      <ul>
        <li>use server-express</li>
        <li>use nodemon</li>
      </ul>
    </>
  );
};

export default UserDetailsPage;
