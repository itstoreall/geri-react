import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import useStyles from './ContentStyles';
// import { routes } from '../routes';

import AboutPage from '../../pages/AboutPage';
import TestPage from '../../pages/TestPage';
import HomeWorksPage from '../../pages/HomeWorksPage';
import UsersPage from '../../pages/UserPage';
import UserDetailsPage from '../../pages/UserDetailsPage';
import HomePage from '../../pages/HomePage';
import BooksPage from '../../pages/BooksPage';
import EventPage from '../../pages/EventPage';
import FormPage from '../../pages/FormPage';
import TimerPage from '../../pages/TimerPage';
import ModalClassPage from '../../pages/ModalClassPage';
import TabsPage from '../../pages/TabsPage';
import DropdownPage from '../../pages/DropdownPage';
import ChildrenPage from '../../pages/ChildrenPage';
import RandomColorsPage from '../../pages/RandomColorsPage';
import ColorPickerPege from '../../pages/ColorPickerPage';
import PokemonPage from '../../pages/PokemonPage';
import TodosPage from '../../pages/TodosPage';
import TodoListPage from '../../pages/TodoListPage';
import TodosViewPage from '../../pages/TodosViewPage';

const Content = () => {
  // const { pathname } = window.location;
  const s = useStyles();

  return (
    <div className={s.content}>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/users/:id' component={UserDetailsPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/todos-view' component={TodosViewPage} />
        <Route path='/todo-list' component={TodoListPage} />
        <Route path='/todos' component={TodosPage} />
        <Route path='/pokemon' component={PokemonPage} />
        <Route path='/color-picker' component={ColorPickerPege} />
        <Route path='/random-colors' component={RandomColorsPage} />
        <Route path='/children' component={ChildrenPage} />
        <Route path='/dropdown' component={DropdownPage} />
        <Route path='/tabs' component={TabsPage} />
        <Route path='/modal-class' component={ModalClassPage} />
        <Route path='/forms' component={FormPage} />
        <Route path='/timer' component={TimerPage} />
        <Route path='/events' component={EventPage} />
        <Route path='/books' component={BooksPage} />
        <Route path='/home-works' component={HomeWorksPage} />
        <Route path='/tests' component={TestPage} />
        <Route path='/about' component={AboutPage} />
        <Redirect to='/' />
        {/* {routes.map(({ path, component: Component }) =>
        pathname === path && <Component key={path} />
      )} */}
      </Switch>
    </div>
  );
};

export default Content;
