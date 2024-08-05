import React from "react";
import Click from "./Click";
import Child from "./Child";
import ReanderProps from "./ReanderProps";

const Main = () => {
  return (
    <div>
      <h4>Reander Props Using Functional Component </h4>
      <ReanderProps
        render={(increment, count) => (
          <Click increment={increment} count={count} />
        )}
      />
      <ReanderProps
        render={(increment, count) => (
          <Child increment={increment} count={count} />
        )}
      />
    </div>
  );
};

export default Main;
