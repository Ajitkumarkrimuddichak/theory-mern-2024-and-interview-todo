import React, { useState } from "react";

const ShortCircuitAllHook = () => {
  const [myval, setMyval] = useState("");

  return (
    <div>
      <h1>
        Short Circuit Evaluation In React All Hook Used 👍
        {myval || (
          <>
            <h3>My House Patna 🥇{setMyval("CSE")}</h3>
            <h4>My Education B.Tech Computer Science Engineer</h4>
          </>
        )}
      </h1>
      <h2>My Name is Ajit Kumar 👎 {myval && "Ram"}</h2>
    </div>
  );
};

export default ShortCircuitAllHook;
