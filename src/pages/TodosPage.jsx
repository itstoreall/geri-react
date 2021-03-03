import React, { Fragment, useState, useEffect } from "react";
import TodoInput from "../components/Todos/TodoInput";
import TodoList from "../components/Todos/TodoList";

const TodosPage = () => {
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

  // Получаем из localStorage (componentDidMount)
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  // Сохраняем в localStorage (componentDidUpdate)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Fragment>
      <h1>Todos</h1>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </Fragment>
  );
};

export default TodosPage;
