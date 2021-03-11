import { Component, Fragment } from "react";
import TodoList from "./TodoList";
import TodoEditor from "./TodoEditor";
import TodoFilter from "./TodoFilter";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Modal from "../Modal";
import todosApi from "./utils/todos-api";
import "./TodoList.scss";

class TodosView extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  // Did Mount
  componentDidMount() {
    // GET todos
    todosApi
      .fetchTodos()
      .then((todos) => this.setState({ todos }))
      .catch((error) => console.log(error));
  }

  // Did Update
  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    // Сохраняет todos в localStorage после проверки обновления
    nextTodos !== prevTodos &&
      localStorage.setItem("todos", JSON.stringify(nextTodos));
  }

  // Add Todo
  addTodo = (text) => {
    const todoData = {
      text,
      completed: false,
    };

    todosApi.addTodo(todoData).then((todo) => {
      this.setState(({ todos }) => ({ todos: [...todos, todo] }));
      this.toggleModal();
    });
  };

  // Delete Todo
  deleteTodo = (todoId) => {
    todosApi.deleteTodo(todoId).then(() => {
      this.setState(({ todos }) => ({
        todos: todos.filter(({ id }) => id !== todoId),
      }));
    });
  };

  // Toggle Completed (false/true)
  toggleCompleted = (todoId) => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = { completed: !completed };

    todosApi.updateTodo(todoId, update).then((updatedTodo) => {
      this.setState(({ todos }) => ({
        todos: todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        ),
      }));
    });
  };

  // Filter
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  // Filtered Todos (Computable data)
  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter)
    );
  };

  // Total Completed
  calculateCompletedTodo = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  // Toggle Modal
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
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

  render() {
    const { todos, filter, showModal } = this.state;
    const TotalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodo();
    const filteredTodos = this.getVisibleTodos();

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
          + Add Todo
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

export default TodosView;
