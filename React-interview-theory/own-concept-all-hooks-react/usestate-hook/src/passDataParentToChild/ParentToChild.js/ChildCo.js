import React from "react";

const ChildCo = ({ name, age, city, profileURL }) => {
  //console.log(props);
  return (
    <>
      <div className="card">
        <div className="avatar">
          <img
            src={profileURL}
            alt="Profile Image"
            style={{ height: "450px", width: "450px" }}
          />
        </div>
        <div>
          <div>Name:{name}</div>
          <div>Age:{age}</div>
          <div>City:{city}</div>
        </div>
      </div>
    </>
  );
};

export default ChildCo;
