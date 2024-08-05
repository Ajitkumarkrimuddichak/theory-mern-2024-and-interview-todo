import React, { useState } from "react";

const Parent = () => {
  const [fName, setfName] = useState("Ajit");
  const [lName, setlName] = useState("kumar");

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
      This is ChildA Component. <br />
      <ChildB fName={fName} lName={lName} />
    </>
  );
}
function ChildB({ fName, lName }) {
  return (
    <>
      This is ChildA Component. <br />
      <ChildC OneCallArgument={fName} SecondCallArgument={lName} />
    </>
  );
}
function ChildC({ OneCallArgument, SecondCallArgument }) {
  return (
    <>
      This is ChildA Component. <br />
      <h3> Data from Parent Component is as follows</h3>
      <h4>{OneCallArgument}</h4>
      <h4>{SecondCallArgument}</h4>
    </>
  );
}
export default Parent;
