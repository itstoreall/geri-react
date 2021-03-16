import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './UsersStyle';

const Users = ({ location }) => {
  const [users, setUsers] = useState([]);
  const s = useStyles();

  useEffect(() => {
    axios.get('http://localhost:2224/users').then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={s.list}>
      {users.map(({ id, name }) => (
        <Link to={`${location.pathname}/${id}`} key={id}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
