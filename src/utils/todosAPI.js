export const getTodos = () =>
  fetch("http://localhost:2222/todos").then((resp) => resp.json());
