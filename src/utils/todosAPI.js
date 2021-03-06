import axios from "axios";

const url = "http://localhost:2222";

export const getTodos = () =>
  axios.get(`${url}/todos`).then(({ data }) => data);

export const createTodo = (payload) =>
  axios.post(`${url}/todos`, payload).then(({ data }) => data);

/* =============================== fetch

const url = "http://localhost:2222";

// GET
export const getTodos = () => fetch(`${url}/todos`)
  .then((resp) => resp.json());

// POST
export const createTodo = (payload) =>
  fetch(`${url}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((resp) => resp.json());

------------------------------------------- */
