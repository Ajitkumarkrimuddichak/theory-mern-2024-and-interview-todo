// Dynamic code in this project
import { useState } from "react";
import "./Collapsible.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CollapsiblePanel = ({ title, children, initialCollapse = true }) => {
  const [collapse, setCollapse] = useState(initialCollapse);

  return (
    <div className="collapsible-panell">
      <div className="coll" onClick={() => setCollapse(!collapse)}>
        <span>{title}</span>
        {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>

      <div
        className={`collapsible-panel-content ${collapse ? "collapsed" : ""}`}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};

export default CollapsiblePanel;
