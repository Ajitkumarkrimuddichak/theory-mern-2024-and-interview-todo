//(1)
/*import { useEffect, useState } from "react";
const HookuseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Inside"); //Kitane bar print hoga " 2 times Local environment" but production me " 1 time print hoga"
  }, []); // 2 Time kyo print hota hai index.js me "<StrictMode> hota hai joki useEffect ko 2 Time Tiger karata hai isi karan se 2 time print hota hai comment karane pe one time print hoga "

  return <div>{count}</div>;
};
export default HookuseEffect;*/

//(2)
/*import { useEffect, useState } from "react";
const HookuseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => { // 2 Time print hoga kyo ki useEffect Two time tiger hua hai
    console.log("Inside"); //koi bhi state update nahi ho rahi hai only for declare kiya hai but no used
  }); // dependancy array no pass to kitane bar print hoga

  return <div>{count}</div>;
};
export default HookuseEffect;*/

//(3) Agar ham state update kara rahe hai to kitane bar print hoga
/*import { useEffect, useState } from "react";
const HookuseEffect = () => {
  const [count, setCount] = useState(0); 

  useEffect(() => {
    console.log("Inside");
    setCount((prevCount) => prevCount + 1); //infinite loop hoga jab tak browser ka memory bhar nahi jata hai tab tak chalate rahega
  });

  return <div>{count}</div>; 
};
export default HookuseEffect; */

//(4) aapako yesa code likhana hai ki, koi dependency Array nahi hoga,ye jo useEffect hai jo ki state ko update karane ke bad one time run hona chahiye.
import { useEffect, useRef, useState } from "react";
const HookuseEffect = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(false);

  useEffect(() => {
    console.log("Inside"); // Ye 3 Three time chala but kyo, 2 Bar tab chala jab component mount pe chalega or fir third time tab chalega jab component didMount pe aayega to component re-render hoga or useEffect trigger hoga
    if (!countRef.current) {
      countRef.current = true;
      setCount((prevCount) => prevCount + 1);
    }
  });

  return <div>{count}</div>;
};
export default HookuseEffect;
