//Objective Question
import React, { useEffect } from "react";

const EffectHook = () => {
  useEffect(() => {
    console.log("Hello useEffect Hook inner");
  });
  console.log("Hello OutSide");
  return (
    <div>
      <h1>hello UseEffect hook</h1>
    </div>
  );
};

export default EffectHook;
