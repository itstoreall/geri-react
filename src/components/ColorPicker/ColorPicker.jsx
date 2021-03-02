import React, { useState } from "react";
import useStyles from "./ColorPickerStyle";

const ColorPicker = ({ options }) => {
  const [activeOptInd, setActiveOptInd] = useState(4);
  const { option, active } = useStyles();

  const setActiveInd = (index) => {
    setActiveOptInd(index);
  };

  // Создаем масс с именами стилей и пушим active если совпадает index
  const makeOptionClassName = (index) => {
    const optionClasses = [option];
    index === activeOptInd && optionClasses.push(active);

    return optionClasses.join(" ");
  };

  // Показывает label активного цвета
  const { label } = options[activeOptInd];

  return (
    <div>
      <p>Выбран цвет: {label}</p>
      {options.map(({ label, color }, index) => (
        <button
          key={label}
          className={makeOptionClassName(index)}
          type="button"
          onClick={() => setActiveInd(index)}
          style={{
            backgroundColor: color,
          }}
        ></button>
      ))}
    </div>
  );

  // *** Добавляет border к активному в инлайн стилях
  // return (
  //   <div>
  //     {options.map(({ label, color }, index) => (
  //       <button
  //         key={label}
  //         className={option}
  //         type="button"
  //         style={{
  //           backgroundColor: color,
  //           border: index === activeOptInd ? "5px solid skyblue" : "none",
  //         }}
  //       >
  //         {color}
  //       </button>
  //     ))}
  //   </div>
  // );
};

export default ColorPicker;
