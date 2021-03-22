import React, { Component } from 'react';
// import useStyles from './EventStyles';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: 0,
    isOpen: false,
  };

  // в setState() переданы и деструктуризированы state и props
  handleIncrement = (e) => {
    this.setState(({ value }, { step }) => ({
      value: value + step,
    }));
  };

  handleDecrement = (e) => {
    this.setState(({ value }, { step }) => ({
      value: value - step,
    }));
  };

  render() {
    // const s = useStyles();
    const { step } = this.props;
    const { value } = this.state;
    // const { button } = this.props.s;
    const { handleIncrement } = this;
    const { handleDecrement } = this;

    return (
      <div>
        <span>{value}</span>
        <button type='button' onClick={handleIncrement}>
          Increment by {step}
        </button>
        <button type='button' onClick={handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;
