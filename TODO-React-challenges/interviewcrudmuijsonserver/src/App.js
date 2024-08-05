import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home";
import AddUsers from "./components/AddUsers.jsx";
import AllUsers from "./components/AllUsers.jsx";
import EditUser from "./components/EditUser.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* components ko render karane ke liye likhana parata hai self closing Tag */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* Note:- components Ex:- Home,About... ka data hide karana hai to , Home pe 
click kare to Home ka data hi dikhe to Two types se kar sakate hai
if else or Routing kar ke
*/
