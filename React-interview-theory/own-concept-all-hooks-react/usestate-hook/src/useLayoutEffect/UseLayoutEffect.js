// import React, { useEffect, useLayoutEffect } from "react";

// const UseLayoutEffect = () => {
//   useEffect(() => {
//     console.log("First useEffect");
//   }, []);

//   useEffect(() => {
//     console.log("Third useEffect");
//   }, []);

//   useLayoutEffect(() => {
//     console.log("Second useEffect");
//   }, []);

//   return <div>LayoutEffect</div>;
// };

// export default UseLayoutEffect;

//(or)
import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [num, SetNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) SetNum(5 + Math.random() * 50);
  }, [num]);
  console.log("~file:Layout.JSX ~ line 9 ~ LayoutEffect ~ num", num);

  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => SetNum(0)}>check</button>
    </>
  );
};

export default UseLayoutEffect;
