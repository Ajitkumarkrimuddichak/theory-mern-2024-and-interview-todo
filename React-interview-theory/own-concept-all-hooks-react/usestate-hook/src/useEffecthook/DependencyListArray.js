import React, { useState, useEffect } from "react";

const DependencyListArray = () => {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    console.log("I am first one");
    if (count >= 1) {
      document.title = `chats (${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  useEffect(() => {
    console.log("I am Fine");
  }, []);
  console.log("Hello OutSide");

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => SetCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default DependencyListArray;
