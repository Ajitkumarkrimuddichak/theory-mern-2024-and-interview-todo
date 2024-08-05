// import React, { useState } from "react";
// const ErrorMessage = "Age must be Greater Then 18";
// const ConditionAge = () => {
//   const [text, setText] = useState("");
//   const [isError, setIsError] = useState(false);

//   const hanadleTextInput = (e) => {
//     setIsError(false);
//     console.log(e.target.value);
//     setText(e.target.value);

//     if (e.target.value < 18) {
//       setIsError(true);
//     }
//   };

//   return (
//     <div className="App">
//       <input value={text} onClick={hanadleTextInput} />
//       {isError ? ErrorMessage : null}
//     </div>
//   );
// };

// export default ConditionAge;

//(or)
import React, { useState } from "react";
const ErrorMessage = "Age must be greater than or equal to 18";

const ConditionAge = () => {
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);

  const handleAgeInput = (e) => {
    setIsError(false);
    const inputValue = parseInt(e.target.value, 10); // Convert input to an integer
    setAge(inputValue);

    if (inputValue < 18) {
      setIsError(true);
    }
  };

  return (
    <div className="App">
      <input
        // Use type="number" for age input
        value={age}
        onChange={handleAgeInput} // Use onChange event
      />
      {isError && <p>{ErrorMessage}</p>}
    </div>
  );
};

export default ConditionAge;
