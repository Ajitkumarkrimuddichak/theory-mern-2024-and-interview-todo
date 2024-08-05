/* What is Props :- Props short for "Properties". Props are used to transfer data from one 
component to another.Props are read only.Props are just like a function in javascript.
*/

/*function PropsPass(props) {
  console.log(props);
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </>
  );
}*/

// Or using destructuring
const PropsPass = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default PropsPass;

/* JS same Think as props
function sum(a){
  return a+a
}
sum(5)*/
