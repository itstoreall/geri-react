import React, { Component, Fragment } from 'react';

class MyReactIsOpen extends Component {
  state = {
    isOpen: false,
  };

  open = () => this.setState({ isOpen: true });
  close = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { button } = this.props.s;

    return (
      <Fragment>
        <span>{isOpen && 0}</span>
        <button className={button} onClick={this.open}>Open</button>
        <button className={button} onClick={this.close}>Close</button>
      </Fragment>
    );
  }
}

export default MyReactIsOpen;