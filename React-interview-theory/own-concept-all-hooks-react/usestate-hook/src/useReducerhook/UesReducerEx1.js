import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const UesReducerEx1 = () => {
  // Initialising useReducer hook
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="text-center">
      <h2 className="fs-1">{count}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UesReducerEx1;
