import React, { Fragment, useState } from "react";
import initialTodos from "../components/TodoList/todos.json";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoList/TodoInput";

const TodoListPage = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");
  // const [completed, setCompleted] = useState(false);

  // Total of Todos
  const totalTodosCount = todos.length;

  // Total of completed Todos
  const completedTodosCount = todos.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0
  );

  // Input value
  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleLicenseChange = (id) => {
    console.log(id);
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <span>Total of Todos: {totalTodosCount}</span>
      <br />
      <span>Completed Todos: {completedTodosCount}</span>
      <TodoInput inputValue={inputValue} onInputChange={handleInputChange} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        onleLicenseChange={handleLicenseChange}
        // checked={completed}
      />
    </Fragment>
  );
};

export default TodoListPage;
