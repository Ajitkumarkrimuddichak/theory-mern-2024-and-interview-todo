import React, { useState } from "react";

const ReactFomeValidation = () => {
  const [email, SetEmail] = useState("");
  const [password, Setpassword] = useState("");

  const [allEntry, SetAllEntry] = useState([]);
  const SubmitFome = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email,
        password,
      };
      SetAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
      SetEmail("");
      Setpassword("");
    } else {
      alert("Plz fill the Data");
    }
  };
  return (
    <>
      <form action="" onSubmit={SubmitFome}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <br /> <br />
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Login</button>
      </form>
      <div>
        {allEntry.map((curElem) => {
          const { id, email, password } = curElem;
          return (
            <div className="'showDataStyle" key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReactFomeValidation;
