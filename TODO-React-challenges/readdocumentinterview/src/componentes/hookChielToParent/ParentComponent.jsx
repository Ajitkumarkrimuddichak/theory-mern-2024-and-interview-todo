import ChieldComponent from "./ChieldComponent";
import { useRef } from "react";

function ParentComponent() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  return (
    <div>
      <ChieldComponent ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}

export default ParentComponent;
