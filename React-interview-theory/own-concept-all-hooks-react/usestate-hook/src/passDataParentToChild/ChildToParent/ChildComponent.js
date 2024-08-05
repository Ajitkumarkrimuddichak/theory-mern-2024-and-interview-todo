import React from "react";

const ChildComponent = ({ handleMyClick }) => {
  const counter = 50;

  return (
    <>
      <h5>Child Component Page</h5>
      <button onClick={() => handleMyClick(counter)}>Click Me</button>
    </>
  );
};

export default ChildComponent;
