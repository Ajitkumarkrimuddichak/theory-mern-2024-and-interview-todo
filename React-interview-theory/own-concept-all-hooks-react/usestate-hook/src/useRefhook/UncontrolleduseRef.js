import React, { useState, useRef } from "react";

const UncontrolleduseRef = () => {
  const luckyNumber = useRef(null);
  const [show, SetShow] = useState(false);

  const SubmitForm = (e) => {
    e.preventDefault();
    const name = luckyNumber.current.value;
    name === " " ? alert("Plz Fill the data") : SetShow(true);
  };

  return (
    <div>
      <form action="" onSubmit={SubmitForm}>
        <div>
          <input
            type="text"
            id="luckyNumber"
            ref={luckyNumber}
            placeholder="Enter the value"
          />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p>{show ? `Your Lucky Number is ${luckyNumber.current.value}` : ""}</p>
    </div>
  );
};

export default UncontrolleduseRef;
