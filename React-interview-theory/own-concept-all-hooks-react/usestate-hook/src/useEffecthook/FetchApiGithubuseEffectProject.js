import React, { useState, useEffect } from "react";
import "../App.css";

const FetchApiGithubuseEffectProject = () => {
  const [users, SetUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    SetUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Github Fetch API using useEffect hook</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                <div className="card p-2">
                  <dir className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.thumbnailUrl}
                        className="round"
                        width="145"
                      />
                    </div>

                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 text-left">Ajit</h4>
                      <span className="text-left">{curElem.title}</span>

                      <div className="p-2 mt-2 bg-primary d-flex justify-content-between round text-white stats">
                        <div className="d-flex flex-column">
                          <span className="articles">Article</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Followers</span>
                          <span className="number2">980</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Rating</span>
                          <span className="number3">89</span>
                        </div>
                      </div>
                    </div>
                  </dir>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchApiGithubuseEffectProject;
