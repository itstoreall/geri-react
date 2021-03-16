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

export const routes = [
  {
    path: '/',
    label: 'Hame',
    component: HomePage,
  },
  {
    path: '/users',
    label: 'Users',
    component: UsersPage,
  },
  {
    path: '/todos-view',
    label: 'Todos View',
    component: TodosViewPage,
  },
  {
    path: '/todo-list',
    label: 'Todo List',
    component: TodoListPage,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: TodosPage,
  },
  {
    path: '/pokemon',
    label: 'Pokemon',
    component: PokemonPage,
  },
  {
    path: '/color-picker',
    label: 'Color Picker',
    component: ColorPickerPege,
  },
  {
    path: '/random-colors',
    label: 'Random Colors',
    component: RandomColorsPage,
  },
  {
    path: '/children',
    label: 'Children',
    component: ChildrenPage,
  },
  {
    path: '/dropdown',
    label: 'Dropdown',
    component: DropdownPage,
  },
  {
    path: '/tabs',
    label: 'Tabs',
    component: TabsPage,
  },
  {
    path: '/modal-class',
    label: 'Modal (Class)',
    component: ModalClassPage,
  },
  {
    path: '/forms',
    label: 'Form',
    component: FormPage,
  },
  {
    path: '/timer',
    label: 'Timer',
    component: TimerPage,
  },
  {
    path: '/events',
    label: 'Events',
    component: EventPage,
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage,
  },
  {
    path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage,
  },
  {
    path: '/tests',
    label: 'Tests',
    component: TestPage,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
  },
];
