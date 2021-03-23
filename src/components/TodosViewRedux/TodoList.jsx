import React from "react";
import cN from "classnames";
import Todo from "./Todo";
import "./TodoList.scss";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li
            key={id}
            className={cN("TodoList__item", {
              "TodoList__item--completed": completed,
            })}
          >
            <Todo
              id={id}
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
