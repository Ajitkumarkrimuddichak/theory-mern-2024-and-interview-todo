import React, { useState } from "react";
import useTitleCount from "./useTitleCount";

const CustomHooks = () => {
  const [count, SetCount] = useState(0);

  useTitleCount(count); //custem hook
  console.log("Hello outside");

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="aa"
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default CustomHooks;
