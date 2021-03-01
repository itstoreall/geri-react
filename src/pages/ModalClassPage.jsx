import { Component, Fragment } from "react";
import ModalClass from "../components/ModalClass";
import ModalSection from "../components/ModalClass/ModalSection";
import withModalClassStyles from "../components/ModalClass/withModalClassStyles";

class ModalClassPage extends Component {
  state = {
    showModalClass: false,
  };

  // Opens and closes the Modal
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
          <ModalClass s={this.props.s} onCloseModalClass={this.toggleModal}>
            <ModalSection
              s={this.props.s}
              onCloseModalClass={this.toggleModal}
            />
          </ModalClass>
        )}
      </Fragment>
    );
  }
}

export default withModalClassStyles(ModalClassPage);
