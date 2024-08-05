import React, { useEffect } from "react";

const UseEffect1 = () => {
  useEffect(() => {
    console.log("useEffect One Hook in");
  });
  console.log("Hello useEffect two Hook outer");
  return (
    <div>
      <h2>Hello useEffect Three Hook</h2>
    </div>
  );
};

export default UseEffect1;
