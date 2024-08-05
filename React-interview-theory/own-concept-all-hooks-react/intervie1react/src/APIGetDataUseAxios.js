import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const APIGetDataUseAxios = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  // using promises
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => setMyData(res.data))
  //       .catch((error) => setIsError(error.message));
  //   }, []);

  // using async || await
  const getapiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    getapiData();
  }, []);

  return (
    <>
      <h1>Axios used API</h1>
      {isError !== "" && <h2>{isError}</h2>}
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default APIGetDataUseAxios;
