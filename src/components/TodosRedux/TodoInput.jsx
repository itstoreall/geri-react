import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button, TextField } from '@material-ui/core';

// JSS
const useStyles = createUseStyles({
  formWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxWrap: {
    paddingTop: 20,
  },
  checkbox: {
    margin: {
      left: 10,
      right: 3,
    },
  },
  buttonsWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
  },
});

const TodoInput = ({ onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');
  const [urgency, setUrgency] = useState('low');
  const s = useStyles();

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
      // id: Date.now(),
      date: Date.now(),
      isDone: false,
      value,
      urgency,
    };

    // Отправляем тудушку через функцию из пропс
    onSubmit(newTodo);

    // Reset
    setValue('');
    setUrgency('low');
    setShowForm(false);
  };

  return (
    <div className={s.formWrap}>
      {showForm ? (
        <form className={s.form} onSubmit={handleSubmit}>
          <TextField
            // className={input}
            label='Enter todo'
            value={value}
            onChange={handleInputChange}
          />
          <div className={s.checkboxWrap}>
            <span>Urgency:</span>

            <label>
              <input
                className={s.checkbox}
                type='radio'
                value='low'
                checked={urgency === 'low'}
                onChange={handleUrgencyChange}
              />
              <span>Low</span>
            </label>

            <label>
              <input
                className={s.checkbox}
                type='radio'
                value='medium'
                checked={urgency === 'medium'}
                onChange={handleUrgencyChange}
              />
              <span>Medium</span>
            </label>

            <label>
              <input
                className={s.checkbox}
                type='radio'
                value='high'
                checked={urgency === 'high'}
                onChange={handleUrgencyChange}
              />
              <span>High</span>
            </label>
          </div>
          <div className={s.buttonsWrap}>
            <Button color='primary' onClick={toggleForm}>
              Cancel
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Add todo
            </Button>
          </div>
        </form>
      ) : (
        <Button variant='contained' color='primary' onClick={toggleForm}>
          + Add todo
        </Button>
      )}
    </div>
  );
};

export default TodoInput;
