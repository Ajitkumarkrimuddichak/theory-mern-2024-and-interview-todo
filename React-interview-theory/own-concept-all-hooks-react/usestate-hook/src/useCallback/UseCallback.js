import { useState, useCallback } from "react";
import Todo from "./Todos";

const UseCallback = () => {
  const [count, SetCount] = useState(0);
  const [todos, SetTodos] = useState([]);

  const increment = () => {
    SetCount(count + 1);
  };

  const addTodo = useCallback(() => {
    SetTodos((prev) => [...prev, `new Entery`]);
  }, [todos]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <br />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallback;
