import React from "react";
import ChildCo from "./ChildCo";
const ParentCo = () => {
  const userProfileStore = [
    {
      name: "Ajit kumar",
      age: "26",
      city: "Patna",
      profileURL:
        "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGltYWdlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div>
      <h4>Parent Component Page Length : {userProfileStore.length}</h4>
      <ChildCo
        name={userProfileStore[0].name}
        age={userProfileStore[0].age}
        city={userProfileStore[0].city}
        profileURL={userProfileStore[0].profileURL}
      />
    </div>
  );
};

export default ParentCo;
