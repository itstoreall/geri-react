import axios from "axios";

const fetchTodos = () => {
  return axios
    .get("http://localhost:2222/todos")
    .then((response) => response.data);
};

const newData = { fetchTodos };
export default newData;
