/* 1)How to work Form in React.js/HTML and Different:-

Not => HTML Form :- This form has default HTML form behavior of browsing to new page when 
the user submits the form.

Not => React.js Form :- Controlled Component kyo used kar rahe hai.HTML Me jo bydefoult
Form milata hai or uaske andar ka functionlity hame nahi chahiye to. Hame to apane data ko 
manipulate karana ho/handle apane tarika se karana hai to React ka Controlled Component 
used karana hoga.

2) Controlled Component :- React ke andar jab ham input fields ko state ke through
controlled karate hai to use Controlled Component.

not:- Controlled Component hamesa handle React.js ke state ke through

3) UnControlled Component :- vaise components jo directely DOM ke through controlled hote 
hai use UnControlled Component kahate hai.

Not:- UnControlled Component input fields jo React.js ke state ke through access nahi honi 
chahiye. Directly Javascript/useRef(),hook ke through access honi chahiye.
Ex:- Gatelement by ID
*/

import { useRef, useState } from "react";
const UncontrolledComponent = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [values, setValues] = useState({ value1: "", value2: "" });

  // Function to stop form reload
  function submitForm(e) {
    e.preventDefault();

    console.log("Input Field 1 value: ", inputRef1.current.value);
    console.log("Input Field 2 value: ", inputRef2.current.value);

    setValues({
      value1: inputRef1.current.value,
      value2: inputRef2.current.value,
    });
  }

  return (
    <div>
      <h4>Uncontrolled Component Example</h4>

      <form onSubmit={submitForm}>
        <input ref={inputRef1} type="text" />
        <br />
        <input ref={inputRef2} type="text" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h4>Input value 1: {values.value1}</h4>
      <h4>Input value 2: {values.value2}</h4>
    </div>
  );
};

export default UncontrolledComponent;
