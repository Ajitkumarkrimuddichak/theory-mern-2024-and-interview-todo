/*What is Prop drilling :-Prop drilling in React is the process of passing 
data from a parent component down to child components through props 
*/
import A_Child from "./A_Child";

const Parent_Prop = () => {
  const Fullname = "Ajit kumar";
  return (
    <>
      <A_Child Fullname={Fullname} />
    </>
  );
};

export default Parent_Prop;
