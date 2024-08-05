import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div>
      <h1>Hello {location.pathname.replace("/", "")}Page</h1>
      {location.pathname === "/About/ajit" ? (
        <p>Hi Ajit Good to see you again</p>
      ) : (
        <p>Login to See your files</p>
      )}
      <button
        className="btn-primary btn"
        onClick={() => history.push("/Index")}
      >
        Home Page
      </button>
    </div>
  );
};

export default Index;
