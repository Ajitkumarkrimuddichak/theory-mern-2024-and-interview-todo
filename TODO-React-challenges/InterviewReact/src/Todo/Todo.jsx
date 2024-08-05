/* Note:- This Todo in Functionlity achive Time,Date,Delete one ,AllDelete only 
for implement  
*/
import { useEffect, useState } from "react";
import "./Todo.css";
import { IoMdThumbsDown } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputVaclue, setInputVaclue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputVaclue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputVaclue) return;

    if (task.includes(inputVaclue)) {
      setInputVaclue(""); //User input then empty kar dega
      return; //check array value semelar or not
    }

    setTask((prevTask) => [...prevTask, inputVaclue]);

    setInputVaclue(""); //User input then empty kar dega
  };

  //Todo Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Todo One Delete function
  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  //Toda All Data Delete Function
  const handleClearTodoDataAll = () => {
    // setTask("");
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List Interview 3 Years</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputVaclue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <IoMdThumbsDown />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
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
