// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//(or) Impress Frends
// import ReactDOM from "react-dom/client";
// function myApp() {
//   return (
//     <div>
//       <h1>Custom Function my Name is Ajit Kumar</h1>
//     </div>
//   );
// }
// ReactDOM.createRoot(document.getElementById("root")).render(myApp());

//(or) Ham Code likhate hai Example but convert  the code
// const ajit = () => {
//   return (
//     <div>
//       <h1>Hi My Name is Ajit kumar Patna </h1>
//     </div>
//   );
// };

// Convert the code in Machine fully Object hai or direct nahi hoga

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

import React from "react";
import ReactDOM from "react-dom/client";
// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

const username = "mukul kumar";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit Google",
  username
  // yaha khud ka syntax hota hai ohi rokata hai. ( if else ) condition nahi likh sakate hai
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
