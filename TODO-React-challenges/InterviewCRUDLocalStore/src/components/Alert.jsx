import { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    // Equivalent to componentDidMount and componentDidUpdate
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    // Equivalent to componentWillUnmount
    return () => clearTimeout(timeout);
  }, [list]); // Dependency array

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
