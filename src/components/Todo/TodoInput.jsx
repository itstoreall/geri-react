import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Button, TextField } from "@material-ui/core";

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
          <TextField
            className={input}
            label="Enter todo"
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
            <Button color="primary" onClick={toggleForm}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Add todo
            </Button>
          </div>
        </form>
      ) : (
        <Button variant="contained" color="primary" onClick={toggleForm}>
          + Add todo
        </Button>
      )}
    </div>
  );
};

export default TodoInput;
