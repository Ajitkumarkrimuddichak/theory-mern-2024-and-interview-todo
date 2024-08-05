/*  Note :- use: This is likely a custom hook or utility function, not a standard React hook,
    as standard React hooks like useState or useEffect are typically imported directly from 'react'.
    
=> cache:- This utility function is used to cache the result of an asynchronous operation
*/

import { use, cache } from "react";
const FetchUser = () => {
  const data = use(fetchUser());
  //console.log(data);

  const style = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <>
      {data.map((curElem) => {
        return (
          <>
            <p key={curElem.id} style={style}>
              {curElem.name}
            </p>
          </>
        );
      })}
    </>
  );
};

//fetch User and Function
const fetchUser = cache(async () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
});

export default FetchUser;
