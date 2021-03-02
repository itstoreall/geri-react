import React, { Fragment } from "react";

const Container = ({ children }) => {
  return (
    <Fragment>
      <p>
        Hi from Container (контейнер который содержит в себе всех детей и
        ограничивает по ширине)
      </p>
      <div>{children}</div>
    </Fragment>
  );
};

export default Container;
