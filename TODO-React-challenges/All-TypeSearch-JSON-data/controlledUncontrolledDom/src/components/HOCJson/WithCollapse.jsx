import { useState } from "react";

const WithCollapse = (ListComp) => {
  //HOC one Argument leta hai or Return karta hai inHance component
  function EnhancedListComp(props) {
    console.log(props);
    const [showList, setShowList] = useState(true);
    const handleClick = () => {
      setShowList((preVal) => !preVal);
    };
    return (
      <div>
        <div onClick={handleClick}>
          <span>{props.Title} </span>
        </div>
        {showList && <ListComp {...props} />}
      </div>
    );
  }
  return EnhancedListComp;
};

export default WithCollapse;
