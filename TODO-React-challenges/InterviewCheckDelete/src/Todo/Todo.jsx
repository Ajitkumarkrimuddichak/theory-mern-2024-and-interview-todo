/* Note:- This Todo in Functionlity achive Time,Date,Delete one,AllDelete and
Check , uncheck for implement  
*/
import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const todoKey = "curTask";
const Todo = () => {
  const [task, setTask] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];
    return JSON.parse(rawTodos);
  });

  const handleFormSubmit = (inputVaclue) => {
    const { id, content, checked } = inputVaclue;
    //To check if the input field is empty or not
    if (!content) return;
    //to check if the data is already existing or not
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //Todo add Data to LocalStorage
  localStorage.setItem(todoKey, JSON.stringify(task));

  // Todo One Delete function
  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  //Toda All Data Delete Function
  const handleClearTodoDataAll = () => {
    // setTask("");
    setTask([]);
  };

  //Todo handleCheckedTodo function
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List Interview 3 Years</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      {/* Clear All Todo */}
      <section>
        <button className="clear-btn" onClick={handleClearTodoDataAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
