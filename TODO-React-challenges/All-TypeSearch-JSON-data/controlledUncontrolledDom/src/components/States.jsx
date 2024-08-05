/* What is State :- The state is a built-in React object that is used to contain data or 
information about the component.
=> A State can be modified based on user action or network changes.
=> Everytime when the state of an object changes, React re-render the component to the browser.

Note:- Two Types se state ko Update kar sakate hai. 1) Class Life Cycle 2)functional me useState
Hook used kar ke 
*/

//(1) No change value Directely
/*const States = () => {
  let x = 20;
  function updateState() {
    x = 10;
  }
  console.log(x);

  return (
    <>
      <h1>No Change State Value {x}</h1>
      <button onChange={updateState}>Click Me</button>
    </>
  );
};
export default States;*/

//(2) Update State using functional based using useState Hook.
/*import { useState } from "react";
const States = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default States;*/

//(or)
import { useState } from "react";
const States = () => {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Button Clicked {count} times</p>
      <button onClick={updateCount}>Click me</button>
    </>
  );
};
export default States;
