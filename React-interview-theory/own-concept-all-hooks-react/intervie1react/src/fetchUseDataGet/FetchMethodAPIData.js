import React from "react";
import UserData from "./UserData";
import { useState } from "react";
import { useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

const FetchMethodAPIData = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </tbody>
        <UserData users={users} />
      </table>
    </>
  );
};

export default FetchMethodAPIData;
