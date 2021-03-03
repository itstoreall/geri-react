import useStyles from "./TodoListStyle";

const TodoInput = ({ inputValue, onInputChange }) => {
  const { input } = useStyles();
  return (
    <input
      className={input}
      type="text"
      value={inputValue}
      onChange={onInputChange}
    />
  );
};

export default TodoInput;
