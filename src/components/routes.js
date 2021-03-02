import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UserPage";
import HomeWorksPage from "../pages/HomeWorksPage";
import BooksPage from "../pages/BooksPage";
import TestPage from "../pages/TestPage";
import AboutPage from "../pages/AboutPage";
import RandomColorsPage from "../pages/RandomColorsPage";
import EventPage from "../pages/EventPage";
import FormPage from "../pages/FormPage";
import TodoPage from "../pages/TodoPage";
import ModalClassPage from "../pages/ModalClassPage";
import ColorPickerPege from "../pages/ColorPickerPage";

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
    label: "Todo",
    component: TodoPage,
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
];
