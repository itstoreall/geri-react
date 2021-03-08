import { Component } from "react";
import TodoList from "./TodoList";
import todos from "./todos.json";
import "./TodoList.scss";

class App extends Component {
  state = {
    todos: todos,
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} />
      </>
    );
  }
}

export default App;
