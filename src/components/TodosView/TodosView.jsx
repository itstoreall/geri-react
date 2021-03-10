import { Component, Fragment } from "react";
import axios from "axios";
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
    todosApi
      .fetchTodos()
      .then((todos) => this.setState({ todos }))
      .catch((error) => console.log(error));
    // axios
    //   .get("http://localhost:2222/todos")
    // .then(({ data }) => this.setState({ todos: data }))
  }

  // Did Update
  componentDidUpdate(prevProps, prevState) {
    // const nextTodos = this.state.todos;
    // const prevTodos = prevState.todos;
    // // Сохраняет todos в localStorage после проверки обновления
    // nextTodos !== prevTodos &&
    //   localStorage.setItem("todos", JSON.stringify(nextTodos));
    // Закрывает Modal после проверки обновления todos
    // nextTodos.length > prevTodos.length &&
    //   prevTodos.length !== 0 &&
    //   this.toggleModal();
  }

  // Add Todo
  addTodo = (text) => {
    const todo = {
      text,
      completed: false,
    };

    axios.post("http://localhost:2222/todos", todo).then(({ data }) => {
      this.setState(({ todos }) => ({
        todos: [...todos, data],
      }));

      this.toggleModal();
    });
  };

  // Delete Todo
  deleteTodo = (todoId) => {
    axios.delete(`http://localhost:2222/todos/${todoId}`).then(console.log);
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

  // Completed (false/true)
  toggleCompleted = (todoId) => {
    const todo = this.state.todos.find(({ id }) => id === todoId);
    const { completed } = todo;

    axios
      .patch(`http://localhost:2222/todos/${todoId}`, { completed: !completed })
      .then(({ data }) => {
        this.setState(({ todos }) => ({
          todos: todos.map((todo) => (todo.id === data.id ? data : todo)),
        }));
      });

    // this.setState(({ todos }) => ({
    //   todos: todos.map((todo) =>
    //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    //   ),
    // }));
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
    console.log("fff");
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
