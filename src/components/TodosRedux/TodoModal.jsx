// import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import useStyles from "./TodoModalStyles";

// Находит рут в разметке
const todoModalRoot = document.querySelector("#todoModal-root");

const TodoModal = ({ onOk, onCancel, text }) => {
  const s = useStyles();

  return createPortal(
    <div className={s.modal__backdrop}>
      <div className={s.modal__content}>
        <h2 className={s.modal__title}>Delete Todo {text}</h2>
        <p>Do you really want to delete todo {text}?</p>

        <div>
          <button className={s.modal__btn} type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className={s.modal__btn} type="button" onClick={onOk}>
            Ok
          </button>
        </div>
      </div>
    </div>,
    todoModalRoot
  );
};

export default TodoModal;
