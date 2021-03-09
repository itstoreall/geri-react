import { Component } from "react";
import TodoList from "./TodoList";
import initialTodos from "./todos.json";
import "./TodoList.scss";

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: "qweqwe",
    license: false,
  };

  // Delete Todo
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  // Input Value
  handleInputChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  handleLicenseChange = (e) => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);

    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const { todos } = this.state;

    const TotalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <div>
          <p>Total: {TotalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          checked={this.state.license}
          onLicenseChange={this.handleLicenseChange}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
