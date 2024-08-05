import HigherOrderComponent from "./HOC";

const Student1 = (props) => {
  return (
    <>
      <h4>Student 1: {props.num}</h4>
      <button onClick={() => props.handleEvent()}>Num Inc</button>
    </>
  );
};

export default HigherOrderComponent(Student1);
