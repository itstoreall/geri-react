import React, { Component } from "react";

// import useStyles from './FormStyles';

class FormItems extends Component {

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    const { input } = this.props.s;
    console.log(value);

    return <input className={input} type="text" value={value} onChange={this.handleChange} />
  };
};

export default FormItems;