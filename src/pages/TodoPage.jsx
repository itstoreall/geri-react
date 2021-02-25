import React, { Fragment } from "react";
import TodoInput from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
  return (
    <Fragment>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </Fragment>
  );
};

export default TodoPage;
