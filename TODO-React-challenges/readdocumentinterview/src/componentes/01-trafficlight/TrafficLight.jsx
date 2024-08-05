import { useState, useEffect } from "react";
import "./Trafficlight.css";

const LIGHTS = {
  red: "red",
  green: "green",
  yellow: "yellow",
};
const TrafficLight = () => {
  const [active, setActive] = useState(LIGHTS.red);

  useEffect(() => {
    switch (active) {
      case LIGHTS.red:
        setTimeout(() => {
          setActive(LIGHTS.yellow);
        }, 4000);
        break;

      case LIGHTS.yellow:
        setTimeout(() => {
          setActive(LIGHTS.green);
        }, 500);
        break;

      case LIGHTS.green:
        setTimeout(() => {
          setActive(LIGHTS.red);
        }, 3000);
        break;
    }
  }, [active]);

  return (
    <div className="wrapper">
      <div
        className="light Green"
        style={active !== LIGHTS.green ? { opacity: 0.5 } : null}
      >
        A
      </div>
      <div
        className="light Yellow"
        style={active !== LIGHTS.yellow ? { opacity: 0.5 } : null}
      >
        B
      </div>
      <div
        className="light Red"
        style={active !== LIGHTS.red ? { opacity: 0.5 } : null}
      >
        C
      </div>
    </div>
  );
};

export default TrafficLight;
