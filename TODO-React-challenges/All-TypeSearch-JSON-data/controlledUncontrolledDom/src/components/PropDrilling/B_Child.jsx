import C_Child from "./C_Child";

const B_Child = ({ Fullname }) => {
  return (
    <div>
      <h5>B Child</h5>
      <C_Child Fullname={Fullname} />
    </div>
  );
};

export default B_Child;
