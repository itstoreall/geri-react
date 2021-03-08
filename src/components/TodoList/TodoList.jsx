import React from "react";
import "./TodoList.scss";
import { IconButton } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <IconButton
          onClick={() => onDeleteTodo(id)}
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <DeleteTwoToneIcon />
        </IconButton>
      </li>
    ))}
  </ul>
);

export default TodoList;
