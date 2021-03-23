export const incrementAction = (value) => ({
  type: 'counter/increment',
  payload: value,
});

export const decrementAction = (value) => ({
  type: 'counter/decrement',
  payload: value,
});
