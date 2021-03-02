import React, { Fragment } from "react";

const styles = {
  header: {
    minHeight: 80,
    backgroundColor: "palevioletred",
  },
};

const AppBar = () => {
  return (
    <Fragment>
      <header style={styles.header}>
        <p>i'm Header (AppBar.jsx)</p>
      </header>
    </Fragment>
  );
};

export default AppBar;
