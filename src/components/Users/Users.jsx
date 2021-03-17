import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import useStyles from './UsersStyle';

const Users = ({ location, history }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(
    queryString.parse(location.search).filter || ''
  );
  const s = useStyles();

  const filteredList = users.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    axios.get('http://localhost:2224/users').then(({ data }) => setUsers(data));
  }, []);

  const handleFilter = (e) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  useEffect(() => {
    history.push({
      ...location,
      search: `?filter=${filter}`,
    });
  }, [filter]); // eslint-disable-line

  return (
    <div className={s.list}>
      <input type='text' value={filter} onChange={handleFilter} />

      {filteredList.map(({ id, name }) => (
        <Link
          to={{
            pathname: `${location.pathname}/${id}`,
            state: { filter },
          }}
          className={s.link}
          key={id}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
