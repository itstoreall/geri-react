import React, { Fragment, useState, useEffect } from "react";
import TodoInput from "../components/Todos/TodoInput";
import TodoList from "../components/Todos/TodoList";
// import Loader from "../components/Loader";
// import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import { getTodos } from "../utils/todosAPI";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   color: teal;
// `;

const TodosPage = () => {
  const [isLoading, setisLoading] = useState(false);
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

  // componentDidMount
  // GET todos from server > db.json (utils > todosAPI)
  useEffect(() => {
    setisLoading(true);
    getTodos()
      .then((result) => setTodos(result))
      .catch((error) => console.log(error.message))
      .finally(() => setisLoading(false));
  }, []);

  // Получаем из localStorage (componentDidMount)
  // useEffect(() => {
  //   setTodos(JSON.parse(localStorage.getItem("todos")));
  // }, []);

  // Сохраняем в localStorage (componentDidUpdate)
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <Fragment>
      <h1>Todos</h1>
      <PulseLoader
        color={"teal"}
        loading={isLoading}
        // css={override}
        size={25}
        margin={5}
      />

      {!isLoading && (
        <>
          <TodoInput onSubmit={handleSubmit} />
          <TodoList
            todos={todos}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        </>
      )}
      <ul>
        <li>Сохраняем в localStorage (componentDidUpdate)</li>
        <li>Получаем из localStorage (componentDidMount)</li>
        <li>use JSON Server</li>
        <li>use React Spinners</li>
      </ul>
    </Fragment>
  );
};

export default TodosPage;
