import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const Main = (props) => {
  return;
  <ErrorBoundary>
    <Alert message="hi"></Alert>
  </ErrorBoundary>;
};

const Alert = ({ message }) => {
  if (typeof message !== "string" || !message) {
    throw new Error("Message must be String");
  }
  return <h1>{message}</h1>;
};

export default Main;
