import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //UserContext se value kaise fetch karu usake liye help karata hai useContext hook
  const { setUser } = useContext(UserContext); //setUser yek Object hai / setUser kaha se aaya hai to vah UserContextProvider se aaya hai

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password }); // Yaha se Data bhej rahe hai
  };

  return (
    <div className="text-center mt-24">
      <h2 className="bg-green-500 text-center text-2xl mt-2">Login page</h2>
      <div className="mt-4">
        <input
          className="bg-black text-white"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {"  "}
        <input
          className="bg-black text-white"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="bg-red-800 text-white" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
