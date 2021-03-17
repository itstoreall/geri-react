import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './UsersStyle';

const Users = ({ location }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const s = useStyles();

  const filteredList = users.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    axios.get('http://localhost:2224/users').then(({ data }) => setUsers(data));
  }, []);

  const handleInputValue = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div className={s.list}>
      <input type='text' value={filter} onChange={handleInputValue} />

      {filteredList.map(({ id, name }) => (
        <Link to={`${location.pathname}/${id}`} key={id}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
