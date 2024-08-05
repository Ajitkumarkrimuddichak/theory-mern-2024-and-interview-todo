// Memoization  in js :- Hamare pass koi code likha hai jo ki first time chala or result mil
// gaya or fir same request aaya usi code ke liye ber ber chala rahe ho usi code ko or
// same/jada time lag raha hai run karane me , first time chala usaka time "cache" me save
// kar lu or fir next time request usi code ke liye aaye to actual code na chale or utana time
// na lage oh memory se utha ke us response ko user ko de-de this is memoization.

// React.js me ham isi ko hook se karate hai joki "usedMemo()" se "cache" karate hai.

import React, { useState, useMemo } from "react";

const Memo = () => {
  const [counterOne, SetcounterOne] = useState(0);
  const [counterTwo, SetcounterTwo] = useState(0);

  const IncrementOne = () => {
    SetcounterOne(counterOne + 1);
  };

  const IncrementTwo = () => {
    SetcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("......Time Slow");
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={IncrementOne}>CounterOne:-{counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={IncrementTwo}>CounterTwo:-{counterTwo}</button>
    </div>
  );
};

export default Memo;
