import axios from "axios";
import { useEffect, useState } from "react";

const DisplayTodos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [currIndex, setCurrIndex] = useState(1);
  const [todoId, setTodoId] = useState();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getData();
  }, []);

  const handlePageChange = (index) => {
    setCurrIndex(index);
  };

  const handleEdit = (todo) => {
    setTodoId(todo.id);
    setTitle(todo.title);
    setCompleted(todo.completed);
  };

  const handleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: title, completed: completed } : todo
      )
    );
    setTodoId(null);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(text.toLowerCase())
  );

  const paginatedTodos = filteredTodos.slice(
    (currIndex - 1) * pageSize,
    pageSize * currIndex
  );

  const totalPages = Math.ceil(filteredTodos.length / pageSize);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTodos.map((todo, id) => (
            <tr key={id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>
                {todo.id === todoId ? (
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  todo.title
                )}
              </td>
              <td>
                {todo.id === todoId ? (
                  <select
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value === "true")}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                ) : todo.completed ? (
                  "Yes"
                ) : (
                  "No"
                )}
              </td>
              <td>
                {todo.id === todoId ? (
                  <button onClick={() => handleDone(todo.id)}>Done</button>
                ) : (
                  <button onClick={() => handleEdit(todo)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayTodos;
