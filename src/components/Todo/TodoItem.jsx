import React from "react";

const TodoItem = ({
  todo: { id, date, value, urgency, isDone },
  onToggle,
  onDelete,
}) => {
  const handleDelete = () => onDelete(id);
  const handleToggle = () => onToggle(id);

  return (
    <div>
      <p>{date}</p>
      <p>{value}</p>
      <p>{urgency}</p>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <button onClick={handleDelete}>×</button>
    </div>
  );
};

export default TodoItem;
