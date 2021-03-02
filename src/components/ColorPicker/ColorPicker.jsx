import React from "react";

// Inline Style
const styles = {
  option: {
    display: "inline-block",
    margin: 4,
    width: 80,
    height: 80,
  },
};

const ColorPicker = ({ options }) => {
  console.log(options);

  return (
    <div>
      {options.map(({ label, color }) => (
        <span
          key={label}
          style={{
            ...styles.option,
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
