import React from "react";
import { TextField } from "@material-ui/core";
import "./TodoList.scss";

const TodoFilter = ({ filter, onChange }) => {
  return (
    <label className="TodoFilter-label">
      <TextField
        // type="text"
        className="TodoInput"
        value={filter}
        onChange={onChange}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    </label>
  );
};

export default TodoFilter;
