import React, { useEffect } from "react";

const useTitleCount = (count) => {
  useEffect(() => {
    console.log("I am First one");
    if (count >= 1) {
      document.title = `Chats (${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  return <div></div>;
};

export default useTitleCount;
