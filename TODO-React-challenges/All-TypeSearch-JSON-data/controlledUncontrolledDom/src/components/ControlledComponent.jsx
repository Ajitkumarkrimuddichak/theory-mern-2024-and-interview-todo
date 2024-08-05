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

import { useState } from "react";
const ControlledComponent = () => {
  const [val, setVal] = useState("");

  return (
    <div>
      <h4>Controlled Component Example</h4>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <h5>Value : {val}</h5>
    </div>
  );
};

export default ControlledComponent;
