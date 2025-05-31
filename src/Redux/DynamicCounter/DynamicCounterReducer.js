import { D_DECREMENT,D_INCREMENT } from "./ActionType";




const initialState = {
 value :10,
};

const DynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case D_INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case D_DECREMENT:
      return {
        ...state,
        value :state.value - action.payload,
      };

    default:
      return state;
  }
};

export default DynamicCounterReducer;
