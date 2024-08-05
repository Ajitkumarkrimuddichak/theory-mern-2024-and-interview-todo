import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <p className="font-bold text-2xl text-orange-950 text-center">
          Colors Project || By Ajit Kumar
        </p>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")} //yehi kyo jaruri tha // onClick method expert karata hai one function pass karoge jo sahi hai / " onClick={setColor} ye function ka reference hai to isame parameter pass nahi kar sakate hai "
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              white
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-gray shadow-lg"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-pink shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
