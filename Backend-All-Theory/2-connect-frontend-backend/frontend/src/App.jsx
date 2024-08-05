import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    //ye pura Frontend standardization flow kar raha hai.Ex:-kuchh bhi change karana go to Easily kar sakate hai
    axios
      .get("/api/jokes") //Not :- Har bar itana bara url nahi likhenge. kyo ki isana bara url likhana sence banata bhi nahi hai. Ex:-http://localhost:3000/api/jokes
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Hi Ajit Kumar</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
