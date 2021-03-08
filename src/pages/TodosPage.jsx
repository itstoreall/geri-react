import React, { Fragment, useState, useEffect } from "react";
import TodoInput from "../components/Todos/TodoInput";
import TodoList from "../components/Todos/TodoList";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "../components/Todos/TodoModal";
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../components/Todos/utils/todosAPI";
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
    // setisLoading(true);

    createTodo(todo)
      .then((data) => setTodos((prevState) => [data, ...prevState]))
      .then(() =>
        toast(`A new todo has been added to the state`, {
          type: "success",
          autoClose: 2000,
        })
      )
      .catch((error) =>
        toast(error.message, {
          type: "error",
          autoClose: 2000,
        })
      );
    // .finally(() => setisLoading(false));
  };

  // Удаление туду
  const handleDeleteTodo = (id) => {
    setcurrentTodo(todos.find((todo) => todo.id === id));
    setShowModal(true);
  };

  // Подтверждение удаления
  const handleOkModal = () => {
    setShowModal(false);
    // setisLoading(true);

    deleteTodo(currentTodo.id)
      .then((id) =>
        setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
      )
      .then(() =>
        toast(`${currentTodo.value} successfully deleted`, {
          type: "success",
          autoClose: 2000,
        })
      )
      .catch((error) =>
        toast(error.message, {
          type: "error",
          autoClose: 2000,
        })
      );
    // .finally(() => setisLoading(false));
  };

  // Отмена удаления туду в подтверждении
  const handleCanselModal = () => setShowModal(false);

  // Изменение значения одного туду
  const handleToggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    updateTodo(id, { isDone: !todo.isDone })
      .then((updatedTodo) =>
        setTodos((prevState) =>
          prevState.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        )
      )
      .then(() =>
        toast(`${currentTodo.value} successfully updated`, {
          type: "success",
          autoClose: 2000,
        })
      )
      .catch((error) =>
        toast(error.message, {
          type: "error",
          autoClose: 2000,
        })
      );
  };

  // componentDidMount
  // GET todos from server > db.json (utils > todosAPI)
  useEffect(() => {
    setisLoading(true);
    getTodos()
      .then((result) => setTodos(result))
      .then(() =>
        toast(`All data received from the db.json`, {
          type: "success",
          autoClose: 2000,
        })
      )
      .catch((error) =>
        toast(error.message, {
          type: "error",
          autoClose: 2000,
        })
      )
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
        <Modal
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
