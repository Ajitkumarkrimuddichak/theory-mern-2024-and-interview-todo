import React, { useState } from "react";

const ObjectUseState = () => {
  const [myobject, setMyobject] = useState({
    myname: "Ajitkumar",
    myage: 20,
    degree: "B.Tech",
    rollno: 161034,
    surname: "Patel",
  });

  const changeObject = () => {
    setMyobject({ ...myobject, myage: 33 });
  };

  return (
    <>
      <h1>Three Dot used and Handle Object using useState Hook</h1>
      <h2>
        Name:- {myobject.myname} And Age :- {myobject.myage} or Degree :-
        {myobject.degree} or RollNo :- {myobject.rollno} and SurName :-
        {myobject.surname}
      </h2>
      <button className="bg-danger" onClick={changeObject}>
        Update Value
      </button>
    </>
  );
};

export default ObjectUseState;
