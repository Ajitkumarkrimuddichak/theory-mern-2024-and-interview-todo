import React, { useContext } from "react";
import { BioData } from "./ComA";

const ComC = ({ Name }) => {
  const ReciveData = useContext(BioData);
  return <h1>Hello ComC my Name is {ReciveData}</h1>;
};

export default ComC;
