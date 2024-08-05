import React, { useState, useEffect } from "react";

const CleanupUseEffect = () => {
  const [widthCount, SetwidthCount] = useState(window.screen.width);

  const actulWidth = () => {
    console.log(window.innerWidth);
    SetwidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("Add event");
    window.addEventListener("resize", actulWidth);

    return () => {
      console.log("remove Event");
      window.removeEventListener("resize", actulWidth);
    };
  });

  return (
    <div>
      <p>The actual Size of the window</p>
      <h1>{widthCount}</h1>
    </div>
  );
};

export default CleanupUseEffect;
