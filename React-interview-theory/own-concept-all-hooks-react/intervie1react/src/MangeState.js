// import { useState } from "react";
// const MangeState = () => {
//   const [user, setUser] = useState("");
//   setUser({ name: "Ajit" });
//   console.log(user);
//   return (
//     <div>
//       <p>{user}</p>
//     </div>
//   );
// };
// export default MangeState;

//(or)
import React, { useState } from "react";
function MangeState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MangeState;
