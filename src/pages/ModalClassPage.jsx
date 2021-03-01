import { Component, Fragment } from "react";
import ModalClass from "../components/ModalClass";
import withModalClassStyles from "../components/ModalClass/withModalClassStyles";

class ModalClassPage extends Component {
  state = {
    showModalClass: false,
  };

  toggleModal = () => {
    this.setState(({ showModalClass }) => ({
      showModalClass: !showModalClass,
    }));
  };

  render() {
    const { showModalClass } = this.state;
    const { modalClassBtn } = this.props.s;

    return (
      <Fragment>
        <h1>Modal (Class)</h1>
        <button
          className={modalClassBtn}
          type="button"
          onClick={this.toggleModal}
        >
          Open Modal
        </button>
        {showModalClass && (
          <ModalClass s={this.props.s}>
            <h2>Hi from Modal children</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button
              className={modalClassBtn}
              type="button"
              onClick={this.toggleModal}
            >
              Close Modal
            </button>
          </ModalClass>
        )}
      </Fragment>
    );
  }
}

export default withModalClassStyles(ModalClassPage);
