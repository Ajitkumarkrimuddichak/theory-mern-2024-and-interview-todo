import React, { useState } from "react";
import "../App.css";

const Concepttwoifelse = () => {
  const [myname, Setmyname] = useState("Ajit kumar if condition concept");

  const changeName = () => {
    let val = myname;
    if (val === "Ajit kumar") {
      Setmyname("Mukul kumar patna");
    } else {
      Setmyname("kumar Ajit patna");
    }
  };

  return (
    <>
      <div className="main">
        <h1>{myname}</h1>
        <button className="btn" onClick={changeName}>
          Click me
        </button>
      </div>
    </>
  );
};

export default Concepttwoifelse;
