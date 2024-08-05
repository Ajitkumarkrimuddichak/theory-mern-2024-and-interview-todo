import React, { useState } from "react";

const TodoUseStare = () => {
  const myBioData = [
    { id: 0, myName: "Ajit kumar", age: 22 },
    { id: 1, myName: "Ishu kumar", age: 23 },
    { id: 2, myName: "Rakesh kumar", age: 24 },
  ];
  const [myArray, setmyArray] = useState(myBioData);
  //console.log(myArray);
  const clearArray = () => {
    setmyArray([]);
  };

  const removeElm = (id) => {
    //alert(id);
    const myNewArray = myArray.filter((curElem) => {
      return curElem.id != id;
    });

    setmyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1 className="h1" key={curElm.id}>
            Name:- {curElm.myName} And Age:- {curElm.age}
            <button onClick={() => removeElm(curElm.id)} className="remove">
              remove
            </button>
          </h1>
        );
      })}
      <button className="h2 bg-success" onClick={clearArray}>
        Clear Data
      </button>
    </>
  );
};

export default TodoUseStare;
