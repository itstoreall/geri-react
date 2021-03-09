import React from "react";
// import { IconButton } from "@material-ui/core";
// import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import "./TodoList.scss";

const Todo = ({ id, text, checked, onLicenseChange, onCange, onDelete }) => (
  <>
    {/* <label>
      <input
        // id={id}
        type="checkbox"
        className="TodoList__checkbox"
        checked={checked}
        onChange={onCange(id)}
      />
    </label> */}
    {/* <p className="TodoList__text">{text}</p>
    <IconButton
      className="TodoList__btn"
      onClick={onDelete}
      disabled={!checked}
      color="primary"
      aria-label="upload picture"
      component="span"
    >
      <DeleteTwoToneIcon />
    </IconButton> */}
  </>
);

export default Todo;
