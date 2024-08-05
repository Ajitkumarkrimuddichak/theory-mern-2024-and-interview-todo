import React, { useState } from "react";

const ConcepTodoArray = () => {
  const myBioData = [
    { id: 0, myName: "Ajit0", age: 25 },
    { id: 1, myName: "Ajit1", age: 26 },
    { id: 2, myName: "Ajit2", age: 27 },
    { id: 3, myName: "Ajit3", age: 28 },
  ];
  const [myArray, SetmyArray] = useState(myBioData);
  const ClearArray = () => {
    SetmyArray([]);
  };
  const removeElem = (id) => {
    const myNewArray = myArray.filter((curElem) => {
      //console.log(curElem);
      return curElem.id !== id;
    });
    SetmyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1 className="btn" key={curElm.id}>
            Name:{curElm.myName} & {curElm.age}
            <button className="main" onClick={() => removeElem(curElm.id)}>
              remove
            </button>
          </h1>
        );
      })}
      <button className="btn" onClick={ClearArray}>
        Clear
      </button>
    </>
  );
};

export default ConcepTodoArray;
