import React from 'react';
import RandomColorsItem from './RandomColorsItem';
import useStyle from './RandomColorsStyle';

const RandomColors = () => {
  const classes = useStyle();

  return (
    <ul className={classes.squaresList}>
      <RandomColorsItem useStyle={useStyle}/>
    </ul>
  )
};

export default RandomColors;