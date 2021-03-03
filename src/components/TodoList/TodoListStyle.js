import { createUseStyles } from "react-jss";

export default createUseStyles({
  // ================== Input
  input: {
    display: "block",
    padding: {
      left: 10,
      right: 10,
    },
    margin: {
      top: 20,
      bottom: 20,
    },
    width: 260,
    height: 40,
    fontSize: 16,
    border: [[2, "solid", "#ccc"]],
    borderRadius: 4,
    outline: "none",

    "&:focus": {
      border: [[2, "solid", "skyblue"]],
    },
  },

  // ================== ul
  todoList: {
    display: "flex",
    flexWrap: "wrap",
    margin: 0,
    padding: 0,
    listStyle: "none",
  },

  // ================== li
  todoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    marginRight: 10,
    marginBottom: 10,
    minWidth: 300,
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

  // ================== button
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
