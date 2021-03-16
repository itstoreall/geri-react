import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2224/users').then(({ data }) => setUsers(data));
  }, []);

  return (
    <>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
