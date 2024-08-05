import React, { useEffect, useState } from "react";
import axios from "axios";
const API_GET_data = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log(err);
      }, []);
  });

  return (
    users &&
    users.map((user) => (
      <div>
        {user.company.name} 👍 {user.phone}
      </div>
    ))
  );
};

export default API_GET_data;
