import React, { useState, useEffect } from "react";

const MainEffectHook = () => {
  const [count, SetCount] = useState(0);

  useEffect(() => {
    document.title = `cheat ${count}`;
  });
  console.log("Hello outSide");

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => SetCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default MainEffectHook;
