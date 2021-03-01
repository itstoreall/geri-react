import { Component } from "react";

class ModalClass extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
  }

  render() {
    const { modalClass__backdrop, modalClass__content } = this.props.s;
    return (
      <div className={modalClass__backdrop}>
        <div className={modalClass__content}>{this.props.children}</div>
      </div>
    );
  }
}

export default ModalClass;
