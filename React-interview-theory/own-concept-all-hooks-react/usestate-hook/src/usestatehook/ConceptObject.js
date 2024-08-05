import React, { useState } from "react";
import "../App.css";

const ConceptObject = () => {
  const [myOject, SetmyObject] = useState({
    myname: "Ajit",
    myAge: 25,
    degree: "Btech",
    rollno: 161034,
    surname: "kumar",
  });
  const changeObject = () => {
    SetmyObject({ ...myOject, myAge: 26, myname: "Dynamic  mukul" });
  };

  return (
    <>
      <div className="main">
        <h1 className="btn">
          Name: {myOject.myname} Age: {myOject.myAge} Degree: {myOject.degree}
        </h1>
        <button className="btn" onClick={changeObject}>
          Update
        </button>
      </div>
    </>
  );
};

export default ConceptObject;
