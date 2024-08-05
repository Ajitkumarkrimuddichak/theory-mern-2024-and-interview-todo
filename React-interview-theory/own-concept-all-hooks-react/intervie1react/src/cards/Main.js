import React from "react";
import { ReactDOM } from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Main = (val) => {
  console.log(val);
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};
ReactDOM.render(
  <>
    <h1>List of Netflix</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);

export default Main;
