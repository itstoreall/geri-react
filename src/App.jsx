import React from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content";
import useStyles from "./AppStyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { app } = useStyles();

  return (
    <div className={app}>
      <Navigation />
      <Content />
      <ToastContainer />
    </div>
  );
}

export default App;
