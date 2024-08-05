import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const handleClick = (recive) => {
    console.log("Parent = Handle click Event fired", recive);
  };

  return (
    <>
      <h4>Parent Component Page</h4>
      <ChildComponent handleMyClick={handleClick} />
    </>
  );
};

export default ParentComponent;
