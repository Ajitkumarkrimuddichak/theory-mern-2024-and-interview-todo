import { useState } from "react";

const useCollapse = () => {
  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
  };

  return { showList, toggleList };
};

export default useCollapse;
