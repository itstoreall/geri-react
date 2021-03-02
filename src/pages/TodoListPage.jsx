import React, { Fragment, useState } from "react";
import initialTodos from "../components/TodoList/todos.json";
import TodoList from "../components/TodoList";

const TodoListPage = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Total of Todos
  const totalTodosCount = todos.length;

  // Total of completed Todos
  const completedTodosCount = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0
  );

  return (
    <Fragment>
      <h1>Todo List</h1>
      <span>Total of Todos: {totalTodosCount}</span>
      <br />
      <span>Completed Todos: {completedTodosCount}</span>
      <TodoList todos={todos} setTodos={setTodos} />
    </Fragment>
  );
};

export default TodoListPage;
