import React, { useState, useEffect } from "react";
import "../../App.css";
import Loading from "./Loading";
import GithubUsers from "./GithubUser";

const Useffect = () => {
  const [users, SetUsers] = useState([]);
  const [loading, SetLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      SetLoading(false);
      SetUsers(await response.json());
    } catch (error) {
      SetLoading(false);
      console.log("My Error is" + error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GithubUsers users={users} />
    </>
  );
};

export default Useffect;
