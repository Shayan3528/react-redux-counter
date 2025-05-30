import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  counters: [0, 0],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counters: state.counters.map((val, index) =>
          index === action.payload ? val + 1 : val
        ),
      };

    case DECREMENT:
      return {
        ...state,
        counters: state.counters.map((val, index) =>
          index === action.payload ? val - 1 : val
        ),
      };

    default:
      return state;
  }
};

export default counterReducer;
