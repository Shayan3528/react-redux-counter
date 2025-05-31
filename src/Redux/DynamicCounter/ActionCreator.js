import { D_DECREMENT, D_INCREMENT } from "./ActionType";
export const increment = (value) => {
  return {
    type: D_INCREMENT,
    payload: value,
  };
};

export const decrement = (value) => {
  return {
    type: D_DECREMENT,
    payload: value,
  };
};
