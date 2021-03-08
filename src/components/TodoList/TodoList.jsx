import React from "react";
// import className from "classnames";
import Todo from "./Todo";
import "./TodoList.scss";

// import shortid from "shortid";
// const shortId = shortid.generate();

const TodoList = ({ todos, onDeleteTodo, checked, onLicenseChange }) => {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className={"TodoList__item"}>
          <Todo
            text={text}
            checked={checked}
            onLicenseChange={onLicenseChange}
            onDelete={() => onDeleteTodo(id)}
          />
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
