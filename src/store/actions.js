export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const add = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

// Async code with redux-thunk middleware
export const addAsync = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(payload));
    }, 2000);
  };
};
export const subtract = (payload) => {
  return {
    type: SUBTRACT,
    payload,
  };
};
