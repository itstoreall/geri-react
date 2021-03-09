import { Component } from "react";
import shortid from "shortid";
import TodoList from "./TodoList";
import initialTodos from "./todos.json";
import TodoEditor from "./TodoEditor";
import TodoFilter from "./TodoFilter";
import "./TodoList.scss";

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: "",
    license: false,
    filter: "",
  };

  // Add Todo
  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
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

  // Checked
  handleLicenseChange = (e) => {
    this.setState({ license: e.currentTarget.checked });
  };

  // Completed
  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  // Total Completed
  calculateCompletedTodo = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  // Filter
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Filtered Todos (Computable data)
  getFilteredTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { todos, filter } = this.state;
    const TotalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodo();
    const filteredTodos = this.getFilteredTodos();

    return (
      <>
        <div>
          <p>Total: {TotalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        {/* <label className="TodoFilter-label">
          <TextField
            // type="text"
            className="TodoInput"
            value={filter}
            onChange={this.changeFilter}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </label> */}
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}
        <TodoList
          todos={filteredTodos}
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
