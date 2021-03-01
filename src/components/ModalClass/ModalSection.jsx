import { Component } from "react";

class ModalSection extends Component {
  render() {
    const { modalClassBtn } = this.props.s;
    return (
      <section>
        <h2>Hi from Modal children</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          className={modalClassBtn}
          type="button"
          onClick={this.props.onCloseModalClass}
        >
          Close Modal
        </button>
      </section>
    );
  }
}

export default ModalSection;
