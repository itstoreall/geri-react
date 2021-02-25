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

const TodoInput = ({ onSubmit }) => {
  const { formWrap, form, input, buttonsWrap } = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [urgency, setUrgency] = useState("low");

  // Скрывает или показывает форму
  const toggleForm = () => setShowForm((prevValue) => !prevValue);

  // Записываем значение инпута в стейт
  const handleInputChange = (e) => setValue(e.target.value);

  // Radio buttons
  const handleUrgencyChange = (e) => setUrgency(e.target.value);

  // Собираем все данные в объект
  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка на наличие текста в инпуте
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      date: Date.now(),
      isDone: false,
      value,
      urgency,
    };

    // Отправляем тудушку через функцию из пропс
    onSubmit(newTodo);

    // Reset
    setValue("");
    setUrgency("low");
    setShowForm(false);
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
              <input
                type="radio"
                value="low"
                checked={urgency === "low"}
                onChange={handleUrgencyChange}
              />
              <span>low</span>
            </label>

            <label>
              <input
                type="radio"
                value="medium"
                checked={urgency === "medium"}
                onChange={handleUrgencyChange}
              />
              <span>medium</span>
            </label>

            <label>
              <input
                type="radio"
                value="high"
                checked={urgency === "high"}
                onChange={handleUrgencyChange}
              />
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
