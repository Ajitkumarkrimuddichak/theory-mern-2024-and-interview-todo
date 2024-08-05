import React, { useState } from "react";

const CalculaterUseState = () => {
  const [val, Setval] = useState("");

  const backspace = () => {
    try {
      Setval(val.slice(0, -1));
    } catch (error) {
      Setval("");
    }
  };

  const calculate = () => {
    try {
      Setval(eval(val));
    } catch (error) {
      Setval("Error");
    }
  };

  return (
    <div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <h6 className="display-6 fw-bolder text-center text-primary">
              CALCULATOR
            </h6>
            <hr />
          </div>
        </div>

        {/* Input Output box */}
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card  mb-2 pt-1 shadow">
              <div className="card-body text-primary">
                <input
                  placeholder="Mathematic Calculation"
                  type="text"
                  className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow"
                  value={val}
                  onClick={(e) => Setval(e.target.value)}
                />

                {/*  ***** button % to ÷ to () and C/CE*****  */}
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-danger text-primary shadow p-3 fs-4"
                      value="c"
                      onClick={() => backspace()}
                    >
                      AC
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="%"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      %
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="÷"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      ÷
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="()"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      ()
                    </button>
                  </div>
                </div>

                {/*  ***** button 1 to 3 and -*****  */}
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="1"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      1
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="2"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      2
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="3"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      3
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="-"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      −
                    </button>
                  </div>
                </div>

                {/*  ***** button 4 to 6 and + *****  */}
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="4"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      4
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="5"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      5
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="6"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      6
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="+"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/*  ***** button 7 to 9 and * *****  */}
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="7"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      7
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="8"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      8
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="9"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      9
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="*"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      x
                    </button>
                  </div>
                </div>

                {/*  ***** button . to / and 0 *****  */}
                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="."
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      .
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="0"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      0
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-5"
                      value="/"
                      onClick={(e) => Setval(val + e.target.value)}
                    >
                      /
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className=" btn btn-dark text-primary shadow p-4 fs-5"
                      value="="
                      onClick={(e) => calculate()}
                    >
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculaterUseState;
