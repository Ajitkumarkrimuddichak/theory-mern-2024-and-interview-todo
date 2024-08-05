import React, { useState } from "react";

const ArrayUseState = () => {
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

  return (
    <>
      {myArray.map((curElm) => (
        <h1 className="h1" key={curElm.id}>
          Name:- {curElm.myName} And Age:- {curElm.age}
        </h1>
      ))}
      <button className="h2 bg-success" onClick={clearArray}>
        Clear Data
      </button>
    </>
  );
};

export default ArrayUseState;
