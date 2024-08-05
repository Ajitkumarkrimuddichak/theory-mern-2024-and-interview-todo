import React, { useState, useMemo } from "react";

const Usememo = () => {
  const [myNum, SetMyNum] = useState(0);
  const [show, SetShow] = useState(false);

  const getvalue = () => {
    return SetMyNum(myNum + 1);
  };

  const CountNumber = (num) => {
    console.log("~file:Memo.jsx ~line 12 ~ CountNumber ~ num", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };
  const checkData = useMemo(() => {
    return CountNumber(myNum);
  }, [myNum]);

  return (
    <>
      <button onClick={getvalue} style={{ background: "red" }}>
        Count
      </button>
      <p>my new Number:{checkData}</p>
      <button onClick={() => SetShow(!show)}>
        {show ? "you Clicked me" : "click me plz"}
      </button>
    </>
  );
};

export default Usememo;
