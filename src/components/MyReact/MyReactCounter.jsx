import React, { Component } from 'react';

class MyReactCounter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  
  handleIncrement = (e) => {
    console.log('Increment button was clicked!', e);

    this.setState({
      step: '2',
    }, () => { console.log('this.state: ', this.state) });
  }

  handleDecrement = (e) => {
    console.log('Increment button was clicked!', e);

    this.setState({
      step: '3',
    }, () => { console.log('this.state: ', this.state) });
  }

  render() {
    const { step } = this.props;
    const { button } = this.props.s;
    const { handleIncrement } = this;
    const { handleDecrement } = this;

    return (
      <div>
        <span>0</span>
        <button
          className={button}
          type="button"
          onClick={handleIncrement}>
          Increment by {step}
        </button>
        <button
          className={button}
          type="button"
          onClick={handleDecrement}>
          Decrement by {step}</button>
      </div>
    );
  }
}

export default MyReactCounter;