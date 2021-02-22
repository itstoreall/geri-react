import React, { Component } from 'react';

class FormSignUp extends Component {

  state = {
    login: '',
  };

  handleChange = e => {
    this.setState({
      login: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);

    this.props.onSubmit(this.state.login);
  };

  render() {
    const { login } = this.state;
    const { input } = this.props.s
    const { button } = this.props.s;
    const { handleChange } = this;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={input}
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={handleChange} />
        </label>

        <button
          className={button}
          type="submit">
          Sign up as {login}
        </button>
      </form>
    );
  };
};

export default FormSignUp;