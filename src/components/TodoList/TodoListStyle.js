import { createUseStyles } from "react-jss";

export default createUseStyles({
  todoList: {
    flexWrap: "wrap",
    listStyle: "none",
  },

  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    width: "30%",
    border: "1px solid grey",
  },

  text: {
    margin: {
      top: 0,
      right: 10,
      bottom: 0,
    },
  },

  button: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    maxWidth: 140,
    fontSize: 16,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "white",
    backgroundColor: "teal",
    border: "none",
    borderRadius: 4,
    outline: "none",

    "&:hover": {
      backgroundColor: "tomato",
    },
  },
});
