import React, { useState } from "react";
import "./Calculater.css";
function Calculator() {
  const [display, setDisplay] = useState("");
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch {
      setDisplay("ERROR");
    }
  };

  const allClear = () => {
    setDisplay("");
  };

  const lastClear = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center w-100"
      >
        <div
          className="col-lg-4 shadow rounded"
          style={{ backgroundColor: "#1C2833" }}
        >
          <h1 className="mt-3 text-center mb-3" style={{ color: "#ECF0F1" }}>
            CALCULATOR
          </h1>
          <div
            style={{ backgroundColor: "#000000" }}
            className="d-flex p-3 mb-3 fs-2  text-white  justify-content-center align-items-center"
          >
            <input
              placeholder={display ? display : "0"}
              id="result"
              type="text"
              className="form-control inpbox fs-1 text-black fw-bolder"
              readOnly
            />
          </div>
          <div className="d-flex mb-2 p-2 justify-content-evenly align-items-center">
            <button
              onClick={() => handleClick("7")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4  text-center text-white "
            >
              7
            </button>
            <button
              onClick={() => handleClick("8")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              8
            </button>
            <button
              onClick={() => handleClick("9")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              9
            </button>
            <button
              onClick={lastClear}
              className="btn shadow rounded fs-5 bg-warning text-center text-danger"
            >
              <i className="fa-solid fa-delete-left">✖️</i>
            </button>
          </div>
          <div className="d-flex mb-2 p-2 justify-content-evenly">
            <button
              onClick={() => handleClick("6")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              6
            </button>
            <button
              onClick={() => handleClick("5")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              5
            </button>
            <button
              onClick={() => handleClick("4")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              4
            </button>
            <button
              onClick={() => handleClick("+")}
              className="btn shadow rounded fs-4 bg-danger text-white"
            >
              <i className="fa-solid fa-plus">+</i>
            </button>
          </div>
          <div className="d-flex mb-2 p-2 justify-content-evenly">
            <button
              onClick={() => handleClick("3")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              3
            </button>
            <button
              onClick={() => handleClick("2")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              2
            </button>
            <button
              onClick={() => handleClick("1")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white"
            >
              1
            </button>
            <button
              onClick={() => handleClick("-")}
              className="btn shadow rounded fs-4  bg-danger text-white"
            >
              <i className="fa-solid fa-minus">-</i>
            </button>
          </div>
          <div className="d-flex mb-2 p-2 justify-content-evenly">
            <button
              onClick={() => handleClick(".")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-center text-white ms-1"
            >
              .
            </button>
            <button
              onClick={() => handleClick("0")}
              style={{ backgroundColor: "#34495E " }}
              className="btn shadow rounded-circle fs-4 text-white ms-1"
            >
              0
            </button>

            <button
              onClick={() => handleClick("/")}
              className="btn  shadow fs-4 bg-danger text-white"
            >
              <i className="fa-solid fa-divide">/</i>
            </button>

            <button
              onClick={() => handleClick("*")}
              className="btn shadow rounded fs-4 bg-danger text-white"
            >
              <i className="fa-solid fa-xmark">*</i>
            </button>
          </div>

          <div className="d-flex mb-4 px-4 justify-content-evenly w-100">
            <button
              style={{ backgroundColor: "red" }}
              onClick={allClear}
              className="btn w-25  shadow fs-4  text-center text-white"
            >
              AC
            </button>
            <button
              onClick={calculateResult}
              className="btn w-50  shadow fs-4 bg-warning text-center text-white"
            >
              <i className="fa-solid fa-equals">=</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
