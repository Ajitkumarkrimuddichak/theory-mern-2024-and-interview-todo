import React from "react";
const Click = (props) => {
  return (
    <div>
      <button onClick={props.increment}> Click Me 👍 {props.count} 👎</button>
    </div>
  );
};

export default Click;
