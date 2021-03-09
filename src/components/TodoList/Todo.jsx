import React from "react";
import { IconButton } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import "./TodoList.scss";

const Todo = ({ id, text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <label>
        <input
          // id={id}
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={onToggleCompleted}
        />
      </label>
      <p className="TodoList__text">{text}</p>
      <IconButton
        className="TodoList__btn"
        onClick={onDelete}
        disabled={!completed}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <DeleteTwoToneIcon />
      </IconButton>
    </>
  );
};

export default Todo;
