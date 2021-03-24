import types from './types';

export const incrementAction = (value) => ({
  type: 'counter/increment',
  payload: value,
});

export const decrementAction = (value) => ({
  type: 'counter/decrement',
  payload: value,
});

export const setStepAction = (step) => ({
  type: types.COUNTER_SET_STEP,
  payload: step,
});
