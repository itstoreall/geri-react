import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './NavStyle';
import { routes } from '../routes';

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      {routes.map(({ path, label, showInMenu }) =>
        showInMenu ? (
          <NavLink
            key={path}
            to={path}
            exact
            className={classes.link}
            activeClassName={classes.activeLink}
          >
            {label}
          </NavLink>
        ) : null
      )}

      {/* <NavLink
        to='/'
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to='/users'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Users
      </NavLink>
      <NavLink
        to='/todos-view'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Todos
      </NavLink>
      <NavLink
        to='/todo-list'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Todo List
      </NavLink>
      <NavLink
        to='/todos'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Todos
      </NavLink>
      <NavLink
        to='/pokemon'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Pokemon
      </NavLink>
      <NavLink
        to='/color-picker'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Color Picker
      </NavLink>
      <NavLink
        to='/random-colors'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Random Colors
      </NavLink>
      <NavLink
        to='/children'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Children
      </NavLink>
      <NavLink
        to='/dropdown'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Dropdown
      </NavLink>
      <NavLink
        to='/tabs'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Tabs
      </NavLink>
      <NavLink
        to='/modal-class'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Modal Class
      </NavLink>
      <NavLink
        to='/forms'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Forms
      </NavLink>
      <NavLink
        to='/timer'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Timer
      </NavLink>
      <NavLink
        to='/events'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Events
      </NavLink>
      <NavLink
        to='/books'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Books
      </NavLink>
      <NavLink
        to='/home-works'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Home Works
      </NavLink>
      <NavLink
        to='/tests'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Tests
      </NavLink>
      <NavLink
        to='/about'
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        About
      </NavLink> */}
    </div>
  );
};

export default Navigation;
