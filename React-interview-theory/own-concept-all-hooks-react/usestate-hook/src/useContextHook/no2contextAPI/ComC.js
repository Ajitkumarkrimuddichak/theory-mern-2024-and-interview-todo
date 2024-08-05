import React from "react";
import { FirstName } from "/useContextHook/App.js";
//usestate-hook\src\useContextHook\no2contextAPI\ComC.js
const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <h1>My Name is {fname}</h1>;
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
