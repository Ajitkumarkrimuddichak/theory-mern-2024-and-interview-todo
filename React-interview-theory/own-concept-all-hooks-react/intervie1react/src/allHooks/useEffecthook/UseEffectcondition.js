import React, { useEffect, useState } from "react";

const UseEffectcondition = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am first one");

    if (count >= 1) {
      document.title = `chats (${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  useEffect(() => {
    console.log("I am fine");
  }, []);

  console.log("Hello OuteSide");
  return (
    <div>
      <h2>useEffect Hook Count And Condition Apply</h2>
      <h1>{count}</h1>
      <button className="bg-success" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectcondition;
