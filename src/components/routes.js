import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UserPage';
import HomeWorksPage from '../pages/HomeWorksPage';
import BooksPage from '../pages/BooksPage';
import TestPage from '../pages/TestPage';
import AboutPage from '../pages/AboutPage';
import RandomColorsPage from '../pages/RandomColorsPage';
import MyReactPage from '../pages/MyReactPage';

export const routes = [
  {
    path: '/geri-react/',
    // path: '/',
    label: 'Hame',
    component: HomePage
  },
  {
    path: '/geri-react/users-page',
    // path: '/users-page',
    label: 'Users',
    component: UsersPage
  },
  {
    path: '/geri-react/home-works',
    // path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage
  },
  {
    path: '/geri-react/books',
    // path: '/books',
    label: 'Books',
    component: BooksPage
  },
  {
    path: '/geri-react/tests',
    // path: '/tests',
    label: 'Tests',
    component: TestPage
  },
  {
    path: '/geri-react/about',
    // path: '/about',
    label: 'About',
    component: AboutPage
  },
  {
    path: '/geri-react/random-colors',
    // path: '/random-colors',
    label: 'Random Colors',
    component: RandomColorsPage
  },
  {
    path: '/geri-react/my-react',
    // path: '/my-react',
    label: 'My React',
    component: MyReactPage
  },
];