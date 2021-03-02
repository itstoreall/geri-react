import { createUseStyles } from "react-jss";

export default createUseStyles({
  option: {
    display: "inline-block",
    margin: 10,
    width: 110,
    height: 110,
    border: "none",
    outline: "none",
    cursor: "pointer",

    transition: "transform 250ms linear",
  },

  active: {
    transform: "scale(1.2)",
    // border: "5px solid skyblue",
  },
  // *** Добавляет border к активному в инлайн стилях
  // optionActive: {
  //   transform: "scale(1.1)",
  // },
});
