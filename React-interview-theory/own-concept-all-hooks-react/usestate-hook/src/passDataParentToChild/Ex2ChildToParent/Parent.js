import React from "react";
import Child from "./Child";

const Parent = () => {
  const reciveData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h4>Parent Component Page. </h4>
      <Child getData={reciveData} />
    </div>
  );
};

export default Parent;
