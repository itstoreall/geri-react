// import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import useStyles from "./ModalHookStyles";

// Находит рут в разметке
const modalHookRoot = document.querySelector("#modalHook-root");

const ModalHook = ({ onOk, onCancel }) => {
  const s = useStyles();

  // // После монтирования Модалки
  // useEffect(window.addEventListener("keydown", handleKeyDown));

  // // После размонтирования Модалки
  // useEffect(window.removeEventListener("keydown", handleKeyDown));

  // // Close by ESC
  // const handleKeyDown = (e) => {
  //   e.code === "Escape" && this.props.onCloseModalHook();
  // };

  // // Close by Backdrop
  // const handleBackdropClick = (e) => {
  //   e.currentTarget === e.target && this.props.onCloseModalHook();
  // };

  // const { modalHook__backdrop, modalHook__content } = s;

  return createPortal(
    <div className={s.modalHook__backdrop}>
      <div className={s.modalHook__content}>
        <h2>Really???</h2>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" onClick={onOk}>
          Ok
        </button>
      </div>
    </div>,
    modalHookRoot
  );
};

export default ModalHook;
