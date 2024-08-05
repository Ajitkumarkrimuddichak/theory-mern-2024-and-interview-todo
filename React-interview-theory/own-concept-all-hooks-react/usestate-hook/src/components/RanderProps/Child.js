import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onMouseLeave={props.increment}>
        Mouse Leave 👍 {props.count} 👍
      </button>
    </div>
  );
};

export default Child;
