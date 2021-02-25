import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formWrap: {
    display: "flex",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  buttonsWrap: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const TodoInput = () => {
  const { formWrap, form, input, buttonsWrap } = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  // Скрывает или показывает форму
  const toggleForm = () => setShowForm((prevValue) => !prevValue);

  // Записываем значение инпута в стейт
  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={formWrap}>
      {showForm ? (
        <form className={form} onSubmit={handleSubmit}>
          <input
            className={input}
            type="text"
            value={value}
            onChange={handleInputChange}
          />
          <div>
            <span>urgency:</span>

            <label>
              <input type="radio" />
              <span>low</span>
            </label>

            <label>
              <input type="radio" />
              <span>medium</span>
            </label>

            <label>
              <input type="radio" />
              <span>high</span>
            </label>
          </div>
          <div className={buttonsWrap}>
            <button onClick={toggleForm}>Cancel</button>
            <button type="submit">Add todo</button>
          </div>
        </form>
      ) : (
        <button onClick={toggleForm}>+ Add todo</button>
      )}
    </div>
  );
};

export default TodoInput;
