import React, { useState } from "react";

const CarPropertyChange = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "2023",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
};
export default CarPropertyChange;
