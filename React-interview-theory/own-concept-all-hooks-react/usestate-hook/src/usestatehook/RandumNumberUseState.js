import React, { useState } from "react";

const RandumNumberUseState = () => {
  const [randumnumber, SetrandumNumber] = useState(0);

  const clickHandler = () => {
    SetrandumNumber(Math.floor(Math.random() * 1000));
  };
  return (
    <div>
      <h1 className="h1style"> {randumnumber} </h1>
      <p>
        <button className="h1style" onClick={clickHandler}>
          Click
        </button>
      </p>
    </div>
  );
};

export default RandumNumberUseState;
