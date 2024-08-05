//Objective Question
import React, { useEffect, useState } from "react";

const IfConditonEffecthook = () => {
  const [count, SetCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `chats(${count})`;
    } else {
      document.title = `charts`;
    }
  });

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => SetCount(count + 1)}>
        Click
      </button>
    </div>
  );
};

export default IfConditonEffecthook;
