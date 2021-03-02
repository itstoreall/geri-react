import React, { Fragment } from "react";
import AppBar from "./AppBar";
import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <AppBar />
      <p>Hi from Layout.jsx (отвечает за расположение компонентов)</p>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
