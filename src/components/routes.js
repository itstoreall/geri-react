import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home" */)
);
const PhonebookReduxPage = lazy(() =>
  import('../pages/PhonebookReduxPage' /* webpackChunkName: "PhonebookRedux" */)
);
const CounterRepetaPage = lazy(() =>
  import('../pages/CounterRepetaPage' /* webpackChunkName: "CounterRepeta" */)
);
const CounterGeriPage = lazy(() =>
  import('../pages/CounterGeriPage' /* webpackChunkName: "CounterGeri" */)
);
const ClockPage = lazy(() =>
  import('../pages/ClockPage' /* webpackChunkName: "Clock" */)
);
const UsersPage = lazy(() =>
  import('../pages/UsersPage' /* webpackChunkName: "Users" */)
);
const UserDetailsPage = lazy(() =>
  import('../pages/UserDetailsPage' /* webpackChunkName: "UserDetails" */)
);
const TodosPage = lazy(() =>
  import('../pages/TodosPage' /* webpackChunkName: "Todos" */)
);
const TodosReduxPage = lazy(() =>
  import('../pages/TodosReduxPage' /* webpackChunkName: "TodosRedux" */)
);
const TodoListPage = lazy(() =>
  import('../pages/TodoListPage' /* webpackChunkName: "TodoList" */)
);
const TodosViewPage = lazy(() =>
  import('../pages/TodosViewPage' /* webpackChunkName: "TodosView" */)
);
const TodosViewReduxPage = lazy(() =>
  import('../pages/TodosViewReduxPage' /* webpackChunkName: "TodosViewRedux" */)
);
const PokemonPage = lazy(() =>
  import('../pages/PokemonPage' /* webpackChunkName: "Pokemon" */)
);
const ColorPickerPege = lazy(() =>
  import('../pages/ColorPickerPage' /* webpackChunkName: "ColorPicker" */)
);
const RandomColorsPage = lazy(() =>
  import('../pages/RandomColorsPage' /* webpackChunkName: "RandomColors" */)
);
const ChildrenPage = lazy(() =>
  import('../pages/ChildrenPage' /* webpackChunkName: "Children" */)
);
const DropdownPage = lazy(() =>
  import('../pages/DropdownPage' /* webpackChunkName: "Dropdown" */)
);
const TabsPage = lazy(() =>
  import('../pages/TabsPage' /* webpackChunkName: "Tabs" */)
);
const ModalClassPage = lazy(() =>
  import('../pages/ModalClassPage' /* webpackChunkName: "ModalClass" */)
);
const TimerPage = lazy(() =>
  import('../pages/TimerPage' /* webpackChunkName: "Timer" */)
);
const FormPage = lazy(() =>
  import('../pages/FormPage' /* webpackChunkName: "Form" */)
);
const EventPage = lazy(() =>
  import('../pages/EventPage' /* webpackChunkName: "Event" */)
);
const BooksPage = lazy(() =>
  import('../pages/BooksPage' /* webpackChunkName: "Books" */)
);
const HocPage = lazy(() =>
  import('../pages/HocPage' /* webpackChunkName: "Hoc" */)
);
const AboutPage = lazy(() =>
  import('../pages/AboutPage' /* webpackChunkName: "About" */)
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/phonebook-redux',
    label: 'Phonebook Redux',
    component: PhonebookReduxPage,
    showInMenu: true,
  },
  {
    path: '/counter-repeta',
    label: 'Counter (Repeta)',
    component: CounterRepetaPage,
    showInMenu: true,
  },
  {
    path: '/counter-geri',
    label: 'Counter (Geri)',
    component: CounterGeriPage,
    showInMenu: true,
  },
  {
    path: '/clock',
    label: 'Clock',
    component: ClockPage,
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
    label: 'Users .s',
    component: UsersPage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/todos',
    label: 'Todos .s',
    component: TodosPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/todos-redux',
    label: 'Todos Redux',
    component: TodosReduxPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/todos-view',
    label: 'Todos View .s',
    component: TodosViewPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/todos-view-redux',
    label: 'Todos View Redux',
    component: TodosViewReduxPage,
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
    path: '/hoc',
    label: 'HOC',
    component: HocPage,
    exact: false,
    showInMenu: true,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
    exact: false,
    showInMenu: true,
  },
];
