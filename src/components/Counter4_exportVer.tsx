import { useReducer } from "react";
import { type CounterState, reducer } from "../reducers/counterReducer";

const initialState: CounterState = { count: 0 };

const Counter4_exportVer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
};

export default Counter4_exportVer;
