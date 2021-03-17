import axios from 'axios';
import React, { useState, useEffect } from 'react';
import useStyles from './UsersDetailsStyle';

const UserDetails = ({
  location,
  history,
  match: {
    params: { id },
  },
}) => {
  const [user, setUser] = useState({});
  const s = useStyles();

  useEffect(() => {
    axios
      .get(`http://localhost:2224/users/${id}`)
      .then(({ data }) => setUser(data));
  }, [id]);

  const handleHistoryBtn = () =>
    history.push({
      pathname: '/users',
      search: `?filter=${location.state.filter}`,
    });

  const { picture, name, login, email } = user;

  return name?.first ? (
    <div className={s.list}>
      <button onClick={handleHistoryBtn}>&#60; Back</button>
      <img src={picture.large} alt={login.uuid} />
      <p>{name.first}</p>
      <p>{name.last}</p>
      <p>{login.uuid}</p>
      <p>{email}</p>
    </div>
  ) : (
    'Loading...'
  );
};

export default UserDetails;
