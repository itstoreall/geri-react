import React, { Fragment, useState, useEffect } from "react";
import TodoInput from "../components/Todos/TodoInput";
import TodoList from "../components/Todos/TodoList";
import PulseLoader from "react-spinners/PulseLoader";
import ModalHook from "../components/ModalHook";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../utils/todosAPI";
import { toast } from "react-toastify";

const TodosPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setcurrentTodo] = useState("");

  // Записывае в стейт готовую тудушку
  const handleSubmit = (todo) => {
    if (todos.find(({ value }) => value === todo.vlue)) return;

    // Показываем Spinner...
    setisLoading(true);

    createTodo(todo)
      .then((data) => setTodos((prevState) => [data, ...prevState]))
      .catch((error) => console.log(error.message))
      .finally(() => setisLoading(false));
  };

  // Удаление туду
  const handleDeleteTodo = (id) => {
    toast("ERROR", {
      type: "error",
      autoClose: 2000,
      position: "top-right",
    });
    // setcurrentTodo(todos.find((todo) => todo.id === id));
    // setShowModal(true);
  };

  // Подтверждение удаления
  const handleOkModal = () => {
    setShowModal(false);
    setisLoading(true);

    deleteTodo(currentTodo.id)
      .then((id) =>
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
      )
      .catch((error) => console.log(error.message))
      .finally(() => setisLoading(false));
    // setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  // Отмена удаления туду в подтверждении
  const handleCanselModal = () => setShowModal(false);

  // Изменение значения одного туду
  const handleToggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    setisLoading(true);

    updateTodo(id, { isDone: !todo.isDone })
      .then((updatedTodo) =>
        setTodos((prevState) =>
          prevState.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        )
      )
      .catch((error) => console.log(error.message))
      .finally(() => setisLoading(false));
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

  /* =============================== localStorage

  // Получаем из localStorage (componentDidMount)
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  // Сохраняем в localStorage (componentDidUpdate)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  ------------------------------------------- */

  return (
    <Fragment>
      <h1>Todos</h1>
      <PulseLoader color={"teal"} loading={isLoading} size={25} margin={5} />

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

      {showModal && (
        <ModalHook
          text={currentTodo.value}
          onOk={handleOkModal}
          onCancel={handleCanselModal}
        />
      )}

      <ul>
        <li>Сохраняем в localStorage (componentDidUpdate)</li>
        <li>Получаем из localStorage (componentDidMount)</li>
        <li>use JSON Server</li>
        <li>use React Spinners</li>
        <li>use React-Toastify</li>
        <li>use axios</li>
      </ul>
    </Fragment>
  );
};

export default TodosPage;
