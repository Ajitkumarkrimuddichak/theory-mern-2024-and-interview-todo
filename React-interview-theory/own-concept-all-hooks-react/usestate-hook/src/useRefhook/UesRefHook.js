//Question (1):- Does Not Cause Re-renders
//Ex:-
// import { useState, useEffect, useRef } from "react";
// const UesRefHook = () => {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <h1 className="mt-5">Render Count: {count.current}</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Enter the value"
//       />
//     </>
//   );
// };

// export default UesRefHook;

// //Question (2):- Accessing DOM Elements
// //Ex:-
// import { useRef } from "react";
// const UesRefHook = () => {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// };

// export default UesRefHook;

//Question (3):- Tracking State Changes
//Ex:-
import { useState, useEffect, useRef } from "react";
const UesRefHook = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h2 className="mt-4">Current Value: {inputValue}</h2>
      <h2 className="mt-4">Previous Value: {previousInputValue.current}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the value"
      />
    </>
  );
};

export default UesRefHook;
