import { Component } from "react";
import useStyle from "./ModalClassStyles";

export default class ModalClass extends Component {
  componentDidMount() {
    console.log("Modal componentDidMount");
  }

  componentWillUnmount() {
    console.log("Modal componentWillUnmount");
  }

  render() {
    return (
      <div className="modalClass__backdrop">
        <div className="modalClass__content">{this.props.children}</div>
      </div>
    );
  }
}
