import React, { useState } from "react";
import "../App.css";

const ConceptArraythree = () => {
  const myBioData = [
    { id: 0, myName: "Ajit kumar", age: 25 },
    { id: 1, myName: "Ram kumar", age: 26 },
    { id: 2, myName: "Mukul kumar", age: 27 },
    { id: 3, myName: "Anand kumar", age: 28 },
  ];
  const [myArray, SetmyArray] = useState(myBioData);
  const clearArray = () => {
    SetmyArray([]);
  };

  return (
    <>
      <h1 className="main">Array concept in useState Hook </h1>
      {myArray.map((curElm) => (
        <h4 className="btn" key={curElm.id}>
          Name:{curElm.myName} & Age:{curElm.age}
        </h4>
      ))}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};

export default ConceptArraythree;
