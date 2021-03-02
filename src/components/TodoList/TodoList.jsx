import React from "react";
import useStyles from "./TodoListStyle";

const TodoList = ({ todos, setTodos }) => {
  const { todoList, todoItem, todoText, button } = useStyles();

  // Deletes Todo
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <ul className={todoList}>
      {todos.map(({ id, text }) => (
        <li key={id} className={todoItem}>
          <p className={todoText}>{text}</p>
          <button
            className={button}
            tupe="button"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
