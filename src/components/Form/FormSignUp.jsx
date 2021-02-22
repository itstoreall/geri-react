import React, { Component } from 'react';

const INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
  };

class FormSignUp extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      login: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefaul();

    const { login, email, password } = this.state;

    console.log(`Login: ${login} Email: ${email} Password: ${password}`);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;
    const { form, formLabel, formInput, formButton } = this.props.s
    const { handleChange } = this;

    return (
      <form
        className={form}
        onSubmit={handleChange}
      >
        <label className={formLabel}>
          Name
          <input
            className={formInput}
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={handleChange}
          />
        </label>
        <label className={formLabel}>
          Email
          <input
            className={formInput}
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={formLabel}>
          Password
          <input
            className={formInput}
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button
          className={formButton}
          type="submit">
          Sign up as {login}
        </button>
      </form>
    );
  };
};

export default FormSignUp;