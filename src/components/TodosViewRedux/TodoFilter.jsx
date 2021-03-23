import React from "react";
import { TextField } from "@material-ui/core";
import "./TodoList.scss";

const TodoFilter = ({ value, onChange }) => {
  return (
    <label className="TodoFilter-label">
      <TextField
        type="text"
        className="TodoInput"
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label="Filter by name"
        // variant="outlined"
      />
    </label>
  );
};

export default TodoFilter;
