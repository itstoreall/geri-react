import { Component } from "react";
import { createPortal } from "react-dom";

// Находит рут в разметке
const modalClassRoot = document.querySelector("#modalClass-root");

class ModalClass extends Component {
  // После монтирования Модалки
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // После размонтирования Модалки
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // Close by ESC
  handleKeyDown = (e) => {
    e.code === "Escape" && this.props.onCloseModalClass();
  };

  // Close by Backdrop
  handleBackdropClick = (e) => {
    e.currentTarget === e.target && this.props.onCloseModalClass();
  };

  render() {
    const { modalClass__backdrop, modalClass__content } = this.props.s;

    return createPortal(
      <div className={modalClass__backdrop} onClick={this.handleBackdropClick}>
        <div className={modalClass__content}>{this.props.children}</div>
      </div>,
      modalClassRoot
    );
  }
}

export default ModalClass;
