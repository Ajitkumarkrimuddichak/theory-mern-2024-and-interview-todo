import React, { useState } from "react";

const Propdrilling_A = () => {
  const [fName, setfName] = useState("firstName_Ajit");
  const [lName, setlName] = useState("LastName_Kumar");

  return (
    <>
      <div>This is a Parent Component</div>
      <br />
      <ChildA fName={fName} lName={lName} />
    </>
  );
};

function ChildA({ fName, lName }) {
  return (
    <>
      This is ChilA Component.
      <br />
      <ChildB fName={fName} lName={lName} />
    </>
  );
}

function ChildB({ fName, lName }) {
  return (
    <>
      This is ChildB Component.
      <br />
      <ChildC fName={fName} lName={lName} />
    </>
  );
}

function ChildC({ fName, lName }) {
  return (
    <>
      This is ChildC Component.
      <br />
      <h3>Data from Parent Component is as follower</h3>
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </>
  );
}

export default Propdrilling_A;
