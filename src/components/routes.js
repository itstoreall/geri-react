import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UserPage";
import HomeWorksPage from "../pages/HomeWorksPage";
import BooksPage from "../pages/BooksPage";
import TestPage from "../pages/TestPage";
import AboutPage from "../pages/AboutPage";
import RandomColorsPage from "../pages/RandomColorsPage";
import EventPage from "../pages/EventPage";
import FormPage from "../pages/FormPage";
import TodosPage from "../pages/TodosPage";
import ModalClassPage from "../pages/ModalClassPage";
import ColorPickerPege from "../pages/ColorPickerPage";
import ChildrenPage from "../pages/ChildrenPage";
import DropdownPage from "../pages/DropdownPage";
import TodoListPage from "../pages/TodoListPage";
import TimerPage from "../pages/TimerPage";
import PokemonPage from "../pages/PokemonPage";
import TabsPage from "../pages/TabsPage";
import TodosViewPage from "../pages/TodosViewPage";

export const routes = [
  {
    path: "/",
    label: "Hame",
    component: HomePage,
  },
  {
    path: "/users-page",
    label: "Users",
    component: UsersPage,
  },
  {
    path: "/home-works",
    label: "Home Works",
    component: HomeWorksPage,
  },
  {
    path: "/books",
    label: "Books",
    component: BooksPage,
  },
  {
    path: "/tests",
    label: "Tests",
    component: TestPage,
  },
  {
    path: "/about",
    label: "About",
    component: AboutPage,
  },
  {
    path: "/random-colors",
    label: "Random Colors",
    component: RandomColorsPage,
  },
  {
    path: "/events",
    label: "Events",
    component: EventPage,
  },
  {
    path: "/forms",
    label: "Form",
    component: FormPage,
  },
  {
    path: "/todos",
    label: "Todos",
    component: TodosPage,
  },
  {
    path: "/modal-class",
    label: "Modal (Class)",
    component: ModalClassPage,
  },
  {
    path: "/color-picker",
    label: "Color Picker",
    component: ColorPickerPege,
  },
  {
    path: "/children",
    label: "Children",
    component: ChildrenPage,
  },
  {
    path: "/dropdown",
    label: "Dropdown",
    component: DropdownPage,
  },
  {
    path: "/todo-list",
    label: "Todo List",
    component: TodoListPage,
  },
  {
    path: "/timer",
    label: "Timer",
    component: TimerPage,
  },
  {
    path: "/pokemon",
    label: "Pokemon",
    component: PokemonPage,
  },
  {
    path: "/tabs",
    label: "Tabs",
    component: TabsPage,
  },
  {
    path: "/todos-view",
    label: "Todos View",
    component: TodosViewPage,
  },
];
