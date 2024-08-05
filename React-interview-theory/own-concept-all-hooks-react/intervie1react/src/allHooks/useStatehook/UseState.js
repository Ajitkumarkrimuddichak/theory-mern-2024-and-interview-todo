import React, { useState } from "react";

const UseState = () => {
  const [myname, setMyname] = useState("my name is Ajit kumar");
  console.log(myname);
  const changeName = () => {
    setMyname("My name is Mukul kumar");
  };

  return (
    <div className="mt-5">
      <h1>Using useState hook</h1>
      <h2>{myname}</h2>
      <button className="btn bg-danger" onClick={changeName}>
        Click Me
      </button>
    </div>
  );
};

export default UseState;
