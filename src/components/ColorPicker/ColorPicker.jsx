import React from "react";
import useStyles from "./ColorPickerStyle";

const ColorPicker = ({ options }) => {
  const { option } = useStyles();

  return (
    <div>
      {options.map(({ label, color }) => (
        <span
          key={label}
          className={option}
          style={{
            backgroundColor: color,
          }}
        >
          {color}
        </span>
      ))}
    </div>
  );
};

export default ColorPicker;
