import { useState, useRef } from "react";
const TimerStartPauseStop = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setCount(0);
    clearInterval(intervalRef.current);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => pauseTimer()}>Pause</button>
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  );
};

export default TimerStartPauseStop;
