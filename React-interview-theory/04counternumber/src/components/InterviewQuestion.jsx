// import { useState } from "react";
// import "../index.css";

// const InterviewQuestion = () => {
//   const [counter, setCounter] = useState(0);

//   const Increment = () => {
//     if (counter < 10) {
//       setCounter(counter + 1);//Interview Question :- How to Increse number
//       setCounter(counter + 1);//Answer :- one one  hi increse hoga kyo ki sabhi to same hi hai
//       setCounter(counter + 1);// Agar same nahi hota to Ex = pahala 1 or dusara vala 2 se increse hota to (2 se increse hota )
//       setCounter(counter + 1);//same concept Decrement me bhi lagu hoga
//     }
//   };

//   const Decremet = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//       setCounter(counter - 1);
//       setCounter(counter - 1);
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <>
//       <h1>Interview Question And Answer</h1>
//       <h2>Number Increse + {counter} - Decrrement Number Interview</h2>
//       <br />
//       <button onClick={Increment} className="Inctement">
//         Increment Number
//       </button>
//       <button onClick={Decremet} className="Decrement">
//         Decrement Number
//       </button>
//     </>
//   );
// };

// export default InterviewQuestion;

//(or)
import { useState } from "react";
import "../index.css";

const InterviewQuestion = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    if (counter < 12) {
      setCounter((previseCounter) => previseCounter + 1); //Increse by 4 hoga
      setCounter((previseCounter) => previseCounter + 1); //na counter, nahi setCounter ki kahani hai yaha pe kah kahani hai useStste hook ka useStste kya karata hai ki jitane bhi Update bhejana hai UI or Variable me usako batch me bhejata hai(batch me bhejane ka kam Diffing/Fiber Algorithm)
      setCounter((previseCounter) => previseCounter + 1); //agar yesa sichubesan aaye ki yesa hi Update karana hai to ham setCounter method ko dena parata hai prevesCounter value
      setCounter((previseCounter) => previseCounter + 1); //previseCounter Existing State deta hai
    }
  };

  const Decremet = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setCounter(counter - 1);
      setCounter(counter - 1);
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Interview Question And Answer</h1>
      <h2>Number Increse + {counter} - Decrrement Number Interview</h2>
      <br />
      <button onClick={Increment} className="Inctement">
        Increment Number
      </button>
      <button onClick={Decremet} className="Decrement">
        Decrement Number
      </button>
    </>
  );
};

export default InterviewQuestion;
