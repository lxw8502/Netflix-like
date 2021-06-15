import { ADD, INIT, REMOVE } from "./actionTypes";

const init = (res) => ({
  type: INIT,
  payload: res
});

const add = (id) => ({
  type: ADD,
  payload: id
});

const remove = (id) => ({
  type: REMOVE,
  payload: id
});

export { add, remove, init };
