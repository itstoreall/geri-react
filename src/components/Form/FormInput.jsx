import React, { Component } from "react";

class FormInput extends Component {

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    const { input } = this.props.s;

    return <input className={input} type="text" value={value} onChange={this.handleChange} />
  };
};

export default FormInput;