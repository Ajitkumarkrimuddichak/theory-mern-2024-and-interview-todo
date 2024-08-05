import React, { useState } from "react";

const App = () => {
  const [obj, setObj] = useState({
    firstname: "Ajit",
    secondname: "Kumar",
    address: {
      firstline: "test1",
      secondline: "test2", // You had a typo here; it should be 'secondline' instead of 'secondlink'
    },
  });

  function handleChange() {
    // Update the state with the new secondline value in the address object
    setObj({ ...obj, address: { ...obj.address, secondline: "test3" } });
  }

  return (
    <div>
      <h1>{obj.firstname}</h1>
      <h1>{obj.secondname}</h1>
      <h1>{obj.address.firstline}</h1>
      <h1>{obj.address.secondline}</h1>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default App;
