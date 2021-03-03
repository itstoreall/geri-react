import React from "react";
import TodoItem from "./TodoItem";
// import TodoItem from "./TodoItemClass"; // не удалять

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
