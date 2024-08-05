import HigherOrderComponent from "./HOC";

const Student2 = (props) => {
  return (
    <>
      <h4>Student 2 : {props.num}</h4>
      <button onClick={() => props.handleEvent()}>Num Inc</button>
    </>
  );
};

export default HigherOrderComponent(Student2);
