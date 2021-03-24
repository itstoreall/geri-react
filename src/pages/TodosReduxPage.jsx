import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../redux/todosGeri/actions';
import TodoInput from '../components/Todos/TodoInput';
import TodoList from '../components/TodosRedux/TodoList';
import PulseLoader from 'react-spinners/PulseLoader';
import Modal from '../components/Todos/TodoModal';
// import {
//   getTodos,
//   createTodo,
//   deleteTodo,
//   updateTodo,
// } from '../components/Todos/utils/todosAPI';
// import { toast } from 'react-toastify';

const TodosReduxPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosGeri.items);

  // Записывае в стейт готовую тудушку
  const handleSubmit = (todo) => {
    if (todos.find(({ value }) => value === todo.value)) return;
    dispatch(addTodo(todo));

    // Показываем Spinner...
    // setIsLoading(true);

    // createTodo(todo)
    //   .then((data) => setTodos((prevState) => [data, ...prevState]))
    //   .then(() =>
    //     toast(`A new todo has been added to the state`, {
    //       type: 'success',
    //       autoClose: 2000,
    //     })
    //   )
    //   .catch((error) =>
    //     toast(error.message, {
    //       type: 'error',
    //       autoClose: 2000,
    //     })
    //   );
    // .finally(() => setisLoading(false));
  };

  // Удаление туду
  const handleDeleteTodo = (id) => {
    setCurrentTodo(todos.find((todo) => todo.id === id));
    setShowModal(true);
  };

  // Отмена удаления туду в подтверждении
  const handleCanselModal = () => setShowModal(false);

  // Подтверждение удаления
  const handleOkModal = () => {
    setShowModal(false);
    dispatch(deleteTodo(currentTodo.id));

    // setisLoading(true);

    // deleteTodo(currentTodo.id)
    //   .then((id) =>
    //     setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
    //   )
    //   .then(() =>
    //     toast(`${currentTodo.value} successfully deleted`, {
    //       type: 'success',
    //       autoClose: 2000,
    //     })
    //   )
    //   .catch((error) =>
    //     toast(error.message, {
    //       type: 'error',
    //       autoClose: 2000,
    //     })
    //   );
    // .finally(() => setisLoading(false));
  };

  // Изменение значения одного туду
  const handleToggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    setIsLoading(true);

    // updateTodo(id, { isDone: !todo.isDone })
    //   .then((updatedTodo) =>
    //     setTodos((prevState) =>
    //       prevState.map((todo) =>
    //         todo.id === updatedTodo.id ? updatedTodo : todo
    //       )
    //     )
    //   )
    //   .then(() =>
    //     toast(`${currentTodo.value} successfully updated`, {
    //       type: 'success',
    //       autoClose: 2000,
    //     })
    //   )
    //   .catch((error) =>
    //     toast(error.message, {
    //       type: 'error',
    //       autoClose: 2000,
    //     })
    //   );
  };

  // componentDidMount
  // GET todos from server > db.json (utils > todosAPI)
  // useEffect(() => {
  //   setisLoading(true);
  //   getTodos()
  //     .then((result) => setTodos(result))
  //     .then(() =>
  //       toast(`All data received from the db.json`, {
  //         type: 'success',
  //         autoClose: 2000,
  //       })
  //     )
  //     .catch((error) =>
  //       toast(error.message, {
  //         type: 'error',
  //         autoClose: 2000,
  //       })
  //     )
  //     .finally(() => setisLoading(false));
  // }, []);

  return (
    <>
      <h1>Todos Redux</h1>
      <PulseLoader color={'teal'} loading={isLoading} size={25} margin={5} />

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
        <li>use Redux</li>
        <li>use React-Redux</li>
      </ul>
    </>
  );
};

export default TodosReduxPage;
