import React, { Fragment, Component } from "react";

class FormInput extends Component {

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    const { input, values } = this.props.s;

    return (
      <Fragment>
        <input
          className={input}
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <span className={values}>{value}</span>
      </Fragment>
    );
  };
};

export default FormInput;