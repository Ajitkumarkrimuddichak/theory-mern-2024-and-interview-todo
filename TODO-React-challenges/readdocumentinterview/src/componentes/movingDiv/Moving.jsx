import "./Moving.css";
import { useState, useRef } from "react";

const Moving = () => {
  const [moving, setMoving] = useState({ x: 0, y: 0 });
  const blockRef = useRef();

  const moveBlock = (dir) => {
    const boundries = {
      up: moving.y <= 0,
      left: moving.x <= 0,
      right: moving.x >= blockRef?.current.offsetWidth - 145,
      down: moving.y >= blockRef?.current.clientHeight - 115,
    };

    if (boundries[dir]) return;

    const updates = {
      up: { y: moving.y - 10 },
      down: { y: moving.y + 10 },
      left: { x: moving.x - 10 },
      right: { x: moving.x + 10 },
    };

    setMoving((prevState) => ({ ...prevState, ...updates[dir] }));
  };

  return (
    <div ref={blockRef}>
      <div>
        <button className="horizontal" onClick={() => moveBlock("up")}>
          Up
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="vertical" onClick={() => moveBlock("left")}>
          Left
        </button>
        <div className="wrapper">
          <div
            className="block"
            style={{
              position: "absolute",
              left: moving.x,
              top: moving.y,
            }}
          ></div>
        </div>
        <button className="vertical" onClick={() => moveBlock("right")}>
          Right
        </button>
      </div>
      <div>
        <button className="horizontal" onClick={() => moveBlock("down")}>
          Down
        </button>
      </div>
    </div>
  );
};

export default Moving;
