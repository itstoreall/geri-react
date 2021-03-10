import { Component, Fragment } from "react";
import shortid from "shortid";
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import TodoFilter from "./TodoFilter";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "../Modal";
import "./TodoList.scss";

class App extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  // Did Mount
  componentDidMount() {
    // Записывает todos из localStorage в стейт
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);
    parsedTodos && this.setState({ todos: parsedTodos });
  }

  // Did Update
  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    // Сохраняет todos в localStorage после проверки обновления
    nextTodos !== prevTodos &&
      localStorage.setItem("todos", JSON.stringify(nextTodos));

    // Закрывает Modal после проверки обновления todos
    nextTodos.length > prevTodos.length &&
      prevTodos.length !== 0 &&
      this.toggleModal();
  }

  // Add Todo
  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    text !== "" &&
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

  // Toggle Modal
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  /* =========================== Test Area

  componentDidMount() {
    console.log("01.1 * componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("01.2 * componentDidUpdate");
    // console.log("prev:", prevState.todos);
    // console.log("this:", this.state.todos);

    this.state.todos !== prevState.todos &&
      console.log("00.0 * Обновилось todos");
  }

  // ------------------------------------ */

  render() {
    // console.log("00.1 * render"); // Test Area^
    const { todos, filter, showModal } = this.state;
    const TotalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodo();
    const filteredTodos = this.getFilteredTodos();

    return (
      <Fragment>
        <div>
          <p>Total: {TotalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>

        <Button
          className="ModaOpen__btn"
          onClick={this.toggleModal}
          variant="contained"
          color="primary"
          type="button"
        >
          Open Modal
        </Button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <span className="ModaClose__btn-wrap">
              <IconButton
                className="ModaClose__btn"
                onClick={this.toggleModal}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <CloseIcon />
              </IconButton>
            </span>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onLicenseChange={this.handleLicenseChange}
          onToggleCompleted={this.toggleCompleted}
        />
      </Fragment>
    );
  }
}

export default App;
