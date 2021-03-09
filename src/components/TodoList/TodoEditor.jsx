import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <label className="TodoEditor__textarea-label">
          <TextField
            className="TodoEditor__textarea"
            value={this.state.message}
            onChange={this.handleChange}
            id="outlined-multiline-static"
            label="Todo text"
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="outlined"
          />
        </label>
        {/* <textarea
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea> */}
        <Button
          className="TodoEditor__btn"
          variant="contained"
          color="primary"
          type="submit"
        >
          + Add Todo
        </Button>
        {/* <button type="button" className="TodoEditor__btn">
          + Add Todo
        </button> */}
      </form>
    );
  }
}

export default TodoEditor;
