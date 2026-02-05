import { useReducer } from "react";

type State = { count: number };
//Action只有個type屬性 且只有此兩字串的可能
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "DECREMENT": {
      return { count: state.count - 1 };
    }
    default:
      return state;
  }
};

const Counter3 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
};

export default Counter3;
