import UseScrollDetection from "./useScrollDetection";

const DetectScroll = () => {
  const scrollDetection = UseScrollDetection();
  return (
    <>
      <h4 style={{ color: "red" }}>Scroll Direction : {scrollDetection}</h4>
      <h2>Custom hook to detect if the scrollbar is going up or down</h2>
    </>
  );
};

export default DetectScroll;
