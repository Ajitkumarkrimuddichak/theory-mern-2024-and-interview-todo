import React, { useState } from "react";
import "../App.css";

const Conceptone = () => {
  const [myname, Setmyname] = useState("Ajit kumar");

  const changeName = () => {
    Setmyname("Mukul kumar");
  };
  console.log(myname);

  return (
    <div className="main">
      <h3>This is Normal Concept in hook in useState</h3>
      <h1>{myname}</h1>
      <button className="btn" onClick={changeName}>
        click me
      </button>
    </div>
  );
};

export default Conceptone;
