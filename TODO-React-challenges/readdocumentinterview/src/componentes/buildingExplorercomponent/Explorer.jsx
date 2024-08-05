import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
const Explorer = ({ data }) => {
  const [expand, isExpand] = useState(false);

  return (
    <div style={{ fontSize: 20 }}>
      <p
        onClick={() => isExpand((prevState) => !prevState)}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        {data.isFolder ? (
          expand ? (
            <MdArrowDropDown />
          ) : (
            <IoMdArrowDropright />
          )
        ) : null}
        {data.name}
      </p>
      {/* Recursion call */}
      <div style={expand ? { display: "block" } : { display: "none" }}>
        {data.isFolder && (
          <div style={{ marginLeft: 15 }}>
            {data.items.map((item) => (
              <Explorer key={item.name} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explorer;
