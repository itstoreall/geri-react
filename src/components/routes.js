import AboutPage from '../pages/AboutPage';
import TestPage from '../pages/TestPage';
import HomeWorksPage from '../pages/HomeWorksPage';
import UsersPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';
import BooksPage from '../pages/BooksPage';
import EventPage from '../pages/EventPage';
import FormPage from '../pages/FormPage';
import TimerPage from '../pages/TimerPage';
import ModalClassPage from '../pages/ModalClassPage';
import TabsPage from '../pages/TabsPage';
import DropdownPage from '../pages/DropdownPage';
import ChildrenPage from '../pages/ChildrenPage';
import RandomColorsPage from '../pages/RandomColorsPage';
import ColorPickerPege from '../pages/ColorPickerPage';
import PokemonPage from '../pages/PokemonPage';
import TodosPage from '../pages/TodosPage';
import TodoListPage from '../pages/TodoListPage';
import TodosViewPage from '../pages/TodosViewPage';
import UserDetailsPage from '../pages/UserDetailsPage';

export const routes = [
  {
    path: '/',
    label: 'Hame',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/users/:id',
    label: 'User Details',
    component: UserDetailsPage,
    exact: false,
  },
  {
    path: '/users',
    label: 'Users',
    component: UsersPage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/todos-view',
    label: 'Todos View',
    component: TodosViewPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/todo-list',
    label: 'Todo List',
    component: TodoListPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: TodosPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/pokemon',
    label: 'Pokemon',
    component: PokemonPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/color-picker',
    label: 'Color Picker',
    component: ColorPickerPege,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/random-colors',
    label: 'Random Colors',
    component: RandomColorsPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/children',
    label: 'Children',
    component: ChildrenPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/dropdown',
    label: 'Dropdown',
    component: DropdownPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/tabs',
    label: 'Tabs',
    component: TabsPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/modal-class',
    label: 'Modal (Class)',
    component: ModalClassPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/forms',
    label: 'Form',
    component: FormPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/timer',
    label: 'Timer',
    component: TimerPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/events',
    label: 'Events',
    component: EventPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage,
    exact: false,
  },
  {
    path: '/tests',
    label: 'Tests',
    component: TestPage,
    exact: false,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
    exact: false,
  },
];
