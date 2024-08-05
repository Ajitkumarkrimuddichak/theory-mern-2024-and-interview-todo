import React, { useEffect, useState } from "react";

const ApiDataFilter = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    let filteredData = users.filter((user) => {
      return user.id > 5;
    });
    setUsers(filteredData);
  };

  return (
    <>
      <h4>Data Filter API</h4>
      <div style={containerStyle}>
        {users.map((user) => (
          <div className="card-inner">
            <div className="">
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={mapData}>Filter Data</button>
    </>
  );
};

export default ApiDataFilter;
