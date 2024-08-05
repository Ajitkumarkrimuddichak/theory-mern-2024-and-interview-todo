import React, { useState } from "react";

const LoginFome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitFome = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);
      setEmail("");
      setPassword("");
    } else {
      alert("Plz Fill The Data");
    }
  };

  return (
    <>
      <h1>Basic Login Fome Using React Hook</h1>
      <form className="fome" action="" onSubmit={submitFome}>
        <div className="maindiv">
          <label htmlFor="email"> Email:- </label>
          <input
            type="email"
            name="email"
            id="email"
            autoCapitalize="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="maindiv">
          <label htmlFor="password"> Password:- </label>
          <input
            type="password"
            name="password"
            id="password"
            autoCapitalize="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="maindiv" type="submit">
          Login
        </button>
      </form>

      <div className="result">
        {allEntry.map((curElm) => {
          return (
            <div key={curElm.id}>
              <span>{curElm.email}</span> 👍
              <span>{curElm.password}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LoginFome;
