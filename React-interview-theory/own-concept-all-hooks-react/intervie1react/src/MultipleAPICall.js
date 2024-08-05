import React, { useEffect, useState } from "react";
import axios from "axios";

const MultipleAPICall = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);

  const fetchData = () => {
    const FirstApi = "https://jsonplaceholder.typicode.com/posts";
    const SecondApi = "https://jsonplaceholder.typicode.com/comments";
    const ThiredApi = "https://jsonplaceholder.typicode.com/photos";

    const getFirestAPI = axios.get(FirstApi);
    const getSecondAPI = axios.get(SecondApi);
    const getThirdAPI = axios.get(ThiredApi);
    axios.all([getFirestAPI, getSecondAPI, getThirdAPI]).then(
      axios.spread((...alldata) => {
        const allgetfirst = alldata[0].data;
        const allgetsecond = alldata[1].data;
        const allgetthired = alldata[2].data;

        setFirst(allgetfirst);
        setSecond(allgetsecond);
        setThird(allgetthired);
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hi Multiple Api Call in React.js</h1>
      <>
        <h2>First Api Data</h2>
        {first.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id}>
              <h1>ID :- {id} </h1>
              <h2>Title :- {title} </h2>
              <h3>Body :- {body} </h3>
            </div>
          );
        })}

        <h2>Second Api Data</h2>
        {second.map((post) => {
          const { id, name, email, body } = post;
          return (
            <div key={id}>
              <h1>ID :- {id} </h1>
              <h2>NAME :- {name} </h2>
              <h3>Email :- {email} </h3>
              <h4>Body :- {body} </h4>
            </div>
          );
        })}

        <h2>Third Api Data</h2>
        {third.map((post) => {
          const { id, title, url, thumbnailUrl } = post;
          return (
            <div key={id}>
              <h1>ID :- {id} </h1>
              <h2>Title :- {title} </h2>
              <h3>URL :- {url} </h3>
              <h4>ThumbnailUrl :- {thumbnailUrl} </h4>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default MultipleAPICall;
