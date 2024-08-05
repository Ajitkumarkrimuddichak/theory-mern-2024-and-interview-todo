import B_Child from "./B_Child";

const A_Child = ({ Fullname }) => {
  return (
    <div>
      <h5>A Child</h5>
      <B_Child Fullname={Fullname} />
    </div>
  );
};

export default A_Child;
