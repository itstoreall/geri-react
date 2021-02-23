import React, { Component } from 'react';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

class FormSignUp extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefaul();

    const { login, email, password, agreed } = this.state;

    console.log(`
      Login: ${login} 
      Email: ${email} 
      Password: ${password}
      Agreed: ${agreed}
    `);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;
    const { form, formLabel, formInput, formButton, formButtonDisabled } = this.props.s
    const { handleChange } = this;

    return (
      <form 
        className={form}
        onSubmit={handleChange}
      >
        <label className={formLabel}>
          Name:
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
          Email:
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
          Password:
          <input
            className={formInput}
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label>
          Agree to terms
          <input 
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={handleChange}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={handleChange}
              />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={handleChange}
            />
          </label>
        </section>
        <label>
          Choose your age
          <select
            name="age" 
            value={age}
            onChange={handleChange}>
              <option value="" disabled>...</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
          </select>
        </label>

        <button
          className={agreed ? formButton : `${formButton} ${formButtonDisabled}`}
          type="submit"
          disabled={!agreed}>
            Sign up as {login}
        </button>
      </form>
    );
  };
};

export default FormSignUp;