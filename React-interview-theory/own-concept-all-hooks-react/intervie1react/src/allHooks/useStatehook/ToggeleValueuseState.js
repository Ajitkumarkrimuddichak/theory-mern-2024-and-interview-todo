import React from "react";

const ToggeleValueuseState = () => {
  const [myName, setMyName] = React.useState("ajitkumar");

  const toggeleValue = () => {
    const str = myName;
    if (str === "ajitkumar") {
      setMyName("kumar Mukul");
    } else {
      setMyName("Ramkumar");
    }
  };

  return (
    <>
      <h1>Toggele Value using useState Hook 👍{myName}</h1>
      <button className="bg-danger" onClick={toggeleValue}>
        Click me
      </button>
    </>
  );
};

export default ToggeleValueuseState;
