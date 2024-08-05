// Javascript Concept
// import "./App.css";
// function App() {
//   // JS Concept hai
//   let counter = 1;
//   const Increment = () => {
//     counter = counter + 1;
//     console.log(counter);
//   };
//   const Decrement = () => {
//     counter = counter - 1;
//   };

//   return (
//     <>
//       <div>
//       {/* JS se value to update ho raha hai but UI Page me koi Update Nahi
//       ho raha hai to isi liye Hook aaya */}
//         <h4>Counter Number {counter}</h4>
//         <h6>Counter Number {counter}</h6>
//         <p>Counter Number {counter}</p>
//         <br />
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//       </div>
//     </>
//   );
// }
// export default App;

//(or) React Concept
import { useState } from "react";
import InterviewQuestion from "./components/InterviewQuestion";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);

  const Increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const Decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <InterviewQuestion />
        {/* React valo ne kaha jo bhi data changing or Update karana hai karo isi liye. 
      React valo ne kuchh Methods/Hooks Diye hai usake thuru data update hoga
      But UI me Update hoga to vah React Controll Karega.  */}
        <h4>Counter Number {counter}</h4>
        <h6>Counter Number {counter}</h6>
        <p>Counter Number {counter}</p>
        <br />
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
}
export default App;
