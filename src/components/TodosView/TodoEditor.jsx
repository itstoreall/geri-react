import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  // addEventListener keydown
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  // removeEventListener keydown
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  // Input value
  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  // Submit by Button
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  // Submit by Enter
  handleKeyDown = (e) => {
    const { message } = this.state;
    e.code === "Enter" && message !== "" && this.props.onSubmit(message);
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <label className="TodoEditor__textarea-label">
          <TextField
            className="TodoEditor__textarea"
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
            id="outlined-multiline-static"
            label="Todo text"
            multiline
            rows={2}
            // defaultValue="Default Value"
            variant="outlined"
          />
        </label>
        <Button
          className="TodoEditor__btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default TodoEditor;
