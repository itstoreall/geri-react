import React from "react";
import cN from "classnames";
import { IconButton } from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
// import Todo from "./Todo";
import "./TodoList.scss";

// import shortid from "shortid";
// const shortId = shortid.generate();

const TodoList = ({
  todos,
  onDeleteTodo,
  // checked,
  // onLicenseChange,
  onToggleCompleted,
}) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={cN("TodoList__item", {
            "TodoList__item--completed": completed,
          })}
        >
          <label>
            <input
              // id={id}
              type="checkbox"
              className="TodoList__checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
          </label>
          <p className="TodoList__text">{text}</p>
          <IconButton
            className="TodoList__btn"
            onClick={() => onDeleteTodo(id)}
            disabled={!completed}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <DeleteTwoToneIcon />
          </IconButton>
          {/* <Todo
            id={id}
            text={text}
            checked={completed}
            onCange={() => onToggleComleted(id)}
            // onLicenseChange={onLicenseChange}
            onDelete={() => onDeleteTodo(id)}
          /> */}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

// =======

// class TodoList extends Component {
//   state = {
//     completed: false,
//   };

//   handleCompletedChange = (e) => {
//     this.setState({ completed: e.currentTarget.checked });
//   };

//   render() {
//     const { todos } = this.props;
//     // const { completed } = this.state;

//     return (
//       <ul className="TodoList">
//         {todos.map(({ id, text }) => (
//           <li key={id} className="TodoList__item">
//             <Todo />
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default TodoList;
