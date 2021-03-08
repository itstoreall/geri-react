import React, { Component } from "react";
import "./TodoList.scss";
import { IconButton } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
// import shortid from "shortid";

// const shortId = shortid.generate();

class TodoList extends Component {
  state = {
    completed: false,
  };

  handleCompletedChange = (e) => {
    this.setState({ completed: e.currentTarget.checked });
  };

  render() {
    const { todos } = this.props;
    const { completed } = this.state;

    return (
      <ul className="TodoList">
        {todos.map(({ id, text }) => (
          <li key={id} className="TodoList__item">
            <label>
              <input
                id={id}
                type="checkbox"
                name="completed"
                checked={completed}
                onChange={this.handleCompletedChange}
              />
            </label>
            <p className="TodoList__text">{text}</p>
            <IconButton
              onClick={() => this.props.onDeleteTodo(id)}
              disabled={!completed}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <DeleteTwoToneIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
