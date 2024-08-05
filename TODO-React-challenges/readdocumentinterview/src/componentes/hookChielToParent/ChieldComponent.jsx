// useImperativeHandle :- This is Hook to working Chield Component to Parent Component

import { forwardRef, useImperativeHandle, useRef } from "react";

const ChieldComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default ChieldComponent;
