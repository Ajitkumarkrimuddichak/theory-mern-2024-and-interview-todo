// How can  directly access to the dom  React.js / Using Functional Components with useRef Hook ?
//Ans:- React  useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Once a ref is created we can directly access and modify the content of that DOM element.
import React, { useRef } from "react";
const Access_to_DOM = () => {
  const myRef = useRef();
  const handleClick = () => {
    myRef.current.value = "You clicked on button";
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1 style={{ color: "green" }}>Ajit Kumar</h1>
      <h3>Accessing DOM using funtional component</h3>
      <input ref={myRef} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Access_to_DOM;
