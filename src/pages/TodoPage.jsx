import React, { Fragment, useState } from "react";
import TodoInput from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  // Удаление
  const handleDeleteTodo = (id) =>
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));

  // Изменение значения одного туду
  const handleToggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo
      )
    );
  };

  // Записывае в стейт готовую тудушку
  const handleSubmit = (todo) => {
    if (todos.find(({ value }) => value === todo.vlue)) return;
    setTodos((prevState) => [todo, ...prevState]);
  };

  return (
    <Fragment>
      <h1>Todo</h1>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </Fragment>
  );
};

export default TodoPage;
