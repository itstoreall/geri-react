import React, { Fragment } from 'react';

const RandomColorsItem = ({useStyle}) => {
  const classes = useStyle();

  return (
    <Fragment>
      <li 
        className={classes.item} 
        style={{ backgroundColor: 
          `rgb(
          ${Math.random() * 255}, 
          ${Math.random() * 255}, 
          ${Math.random() * 255})` 
      }}>
        Hi1
      </li>
      <li 
        className={classes.item} 
        style={{ backgroundColor: 
          `rgb(
          ${Math.random() * 255}, 
          ${Math.random() * 255}, 
          ${Math.random() * 255})` 
      }}>
        Hi2
      </li>
      <li 
        className={classes.item} 
        style={{ backgroundColor: 
          `rgb(
          ${Math.random() * 255}, 
          ${Math.random() * 255}, 
          ${Math.random() * 255})` 
      }}>
        Hi3
      </li>
    </Fragment>
  )
};

export default RandomColorsItem;