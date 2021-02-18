import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UserPage';
import HomeWorksPage from '../pages/HomeWorksPage';
import BooksPage from '../pages/BooksPage';
import TestPage from '../pages/TestPage';
import AboutPage from '../pages/AboutPage';
import RandomColorsPage from '../pages/RandomColorsPage';

export const routes = [
  {
    path: '/',
    label: 'Hame',
    component: HomePage
  },
  {
    path: '/users-page',
    label: 'Users',
    component: UsersPage
  },
  {
    path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage
  },
  {
    path: '/tests',
    label: 'Tests',
    component: TestPage
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage
  },
  {
    path: '/random-colors',
    label: 'Random Colors',
    component: RandomColorsPage
  },
];